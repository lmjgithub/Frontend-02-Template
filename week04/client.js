const net = require('net');

class Request {
  constructor(options) {
    const contentType = 'Content-Type';
    const urlencoded = 'application/x-www-form-urlencoded';
    const {
      method = 'GET',
      host,
      port = 80,
      path = '/',
      body = {},
      headers = {},
    } = options;
    this.method = method;
    this.host = host;
    this.port = port;
    this.path = path;
    this.body = body;
    this.headers = headers;
    if (!this.headers[contentType]) {
      this.headers[contentType] = urlencoded;
    }
    if (this.headers[contentType] === 'application/json') {
      this.bodyText = JSON.stringify(this.body);
    } else if (this.headers[contentType] === urlencoded) {
      this.bodyText = Object.keys(this.body)
        .map((key) => `${key}=${encodeURIComponent(this.body[key])}`)
        .join('&');
    }
    this.headers['Content-Length'] = this.bodyText.length;
  }

  send(connection) {
    return new Promise((res, rej) => {
      const parser = new ResponseParser();
      if (connection) {
        connection.write(this.toString());
      } else {
        connection = new net.createConnection(
          { host: this.host, port: this.port },
          () => {
            connection.write(this.toString());
          }
        );
      }
      connection.on('data', (chunk) => {
        parser.receive(chunk.toString());
        if (parser.isFinished) {
          res(parser.response);
          connection.end();
        }
      });
    });
  }

  toString() {
    const requestLine = `${this.method} ${this.path} HTTP/1.1\r`;
    const headers = `${Object.keys(this.headers)
      .map((key) => `${key}: ${this.headers[key]}`)
      .join('\r\n')}\r`;
    const body = this.bodyText;
    return `${requestLine}
${headers}
\r
${body}`;
  }
}

class ResponseParser {
  constructor() {
    this.statusLine = '';
    this.headers = {};
    this.headerName = '';
    this.headerValue = '';
    this.bodyParser = null;
    this.state = this.start;
  }
  receive(string) {
    for (const char of string) {
      this.state = this.state(char);
    }
  }
  start(c) {
    return this.addStatusLine(c);
  }
  end(c) {
    return this.end;
  }
  addStatusLine(c) {
    if (c === '\r') {
      return this.parseHeaderLine;
    } else {
      this.statusLine += c;
      return this.addStatusLine;
    }
  }

  parseHeaderLine(c) {
    if (c === '\n') {
      return this.addHeaderKey;
    } else if (this.headers['Transfer-Encoding'] === 'chunked') {
      this.bodyParser = new ChunkedBodyParser();
    }
  }
  addHeaderKey(c) {
    if (c === ':') {
      return this.parseHeaderValue;
    } else if (c === '\r') {
      return this.end;
    } else {
      this.headerName += c;
      return this.addHeaderKey;
    }
  }
  parseHeaderValue(c) {
    if (c === ' ') {
      return this.addHeaderValue;
    }
  }
  addHeaderValue(c) {
    if (c === '\r') {
      this.headers[this.headerName] = this.headerValue;
      this.headerName = '';
      this.headerValue = '';
      return this.parseHeaderLine;
    } else {
      this.headerValue += c;
      return this.addHeaderValue;
    }
  }
}

class ChunkedBodyParser {
  constructor() {
    this.length = 0;
    this.content = [];
    this._isFinished = false;
    this.state = this.start;
  }

  receiveChar(char) {
    this.state = this.state(char);
  }

  start(c) {}

  parseLength(c) {
    this.length *= 16;
    this.length += parseInt(c, 16);
    return this.lengthEnd;
  }
  lengthEnd(c) {
    if (c === '\r') {
      if (this.length === 0) {
        this._isFinished = true;
      }
      return this.contentStart;
    }
  }
  contentStart(c) {
    if (c === '\n') {
      return this.addContent;
    }
  }
  addContent(c) {
    this.content.push(c);
    this.length--;
    if (this.length === 0) {
      return this.contentEnd;
    }
    return this.addContent;
  }
  contentEnd(c) {
    if (c === '\r') {
      return this.nextLengthStart;
    }
  }
  nextLengthStart(c) {
    if (c === '\n') {
      return this.parseLength;
    }
  }
}
