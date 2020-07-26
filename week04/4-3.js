function match(string) {
  for (const item of string) {
    if (item === 'a') {
      return true;
    }
  }
  return false;
}


console.log(match('bcd'))