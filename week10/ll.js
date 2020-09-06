const regexp = /([0-9\.]+)|([ \t]+)|([\r\n]+)|(\*)|(\/)|(\+)|(\-)/g;
const dictionary = [
  'Number',
  'WhiteSpace',
  'LineTerminator',
  '*',
  '/',
  '+',
  '-',
];
const EOF = Symbol('EOF');

function* tokenize(source) {
  let result = null;
  let lastIndex = 0;
  while (true) {
    lastIndex = regexp.lastIndex;
    result = regexp.exec(source);
    if (!result) break;
    if (regexp.lastIndex - lastIndex > result[0].length) break;
    let token = { type: null, value: null };

    for (let i = 0; i < dictionary.length; i++) {
      if (result[i]) {
        dictionary[i - 1] && (token.type = dictionary[i - 1]);
      }
    }
    token.value = result[0];
    yield token;
  }
  yield { type: EOF };
}

function Expression(source) {
  if (
    source[0].type === 'AdditiveExpression' &&
    source[1] &&
    source[1].type === EOF
  ) {
    let node = {
      type: 'Expression',
      children: [source.shift(), source.shift()],
    };
    source.unshift(node);
    return node;
  }
  AdditiveExpression(source);
  return Expression(source);
}

function AdditiveExpression(source) {
  if (source[0].type === 'MultiplicativeExpression') {
    let node = {
      type: 'AdditiveExpression',
      children: [source[0]],
    };
    source[0] = node;
    return AdditiveExpression(source);
  }

  if (
    source[0].type === 'AdditiveExpression' &&
    source[1] &&
    source[1].type === '+'
  ) {
    let node = {
      type: 'AdditiveExpression',
      operator: '+',
      children: [],
    };
    node.children.push(source.shift());
    node.children.push(source.shift());
    MultiplicativeExpression(source);
    node.children.push(source.shift());
    source.unshift(node);
    return AdditiveExpression(source);
  }

  if (
    source[0].type === 'AdditiveExpression' &&
    source[1] &&
    source[1].type === '-'
  ) {
    let node = {
      type: 'AdditiveExpression',
      operator: '-',
      children: [],
    };
    node.children.push(source.shift());
    node.children.push(source.shift());
    MultiplicativeExpression(source);
    node.children.push(source.shift());
    source.unshift(node);
    return AdditiveExpression(source);
  }

  if (source[0].type === 'AdditiveExpression') {
    return source[0];
  }

  MultiplicativeExpression(source);
  return AdditiveExpression(source);
}

function MultiplicativeExpression(source) {
  if (source[0].type === 'Number') {
    let node = { type: 'MultiplicativeExpression', children: [source[0]] };
    source[0] = node;
    return MultiplicativeExpression(source);
  }

  if (
    source[0].type === 'MultiplicativeExpression' &&
    source[1] &&
    source[1].type === '*'
  ) {
    let node = {
      type: 'MultiplicativeExpression',
      operator: '*',
      children: [],
    };
    node.children.push(source.shift());
    node.children.push(source.shift());
    node.children.push(source.shift());
    source.unshift(node);
    return MultiplicativeExpression(source);
  }

  if (
    source[0].type === 'MultiplicativeExpression' &&
    source[1] &&
    source[1].type === '/'
  ) {
    let node = {
      type: 'MultiplicativeExpression',
      operator: '/',
      children: [],
    };
    node.children.push(source.shift());
    node.children.push(source.shift());
    node.children.push(source.shift());
    source.unshift(node);
    return MultiplicativeExpression(source);
  }

  if (source[0].type === 'MultiplicativeExpression') {
    return source[0];
  }

  return MultiplicativeExpression(source);
}

let tokens = [];
for (const iterator of tokenize('1024*10+25')) {
  tokens.push(iterator);
}

let a = Expression(tokens);
console.log(a)