function match(string) {
  let state = start;
  for (const s of string) {
    state = state(s);
  }
  return state === end;
}

function start(s) {
  if (s === 'a') {
    return foundA;
  } else {
    return start;
  }
}
function end() {
  return end;
}
function foundA(s) {
  if (s === 'b') {
    return foundB;
  } else {
    return start(s);
  }
}
function foundB(s) {
  if (s === 'a') {
    return foundA2;
  } else {
    return start(s);
  }
}

function foundA2(s) {
  if (s === 'b') {
    return foundB2;
  } else {
    return start(s);
  }
}
function foundB2(s) {
  if (s === 'a') {
    return foundA3;
  } else {
    return start(s);
  }
}

function foundA3(s) {
  if (s === 'b') {
    return foundB3;
  } else {
    return start(s);
  }
}

function foundB3(s) {
  if (s === 'x') {
    return end;
  } else if (s === 'a') {
      return foundA3
  } else {
    return start(s);
  }
}

console.log(match('abxxabxxabababx'))