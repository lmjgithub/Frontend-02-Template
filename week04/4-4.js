function match(string) {
    let findA = false;
    for (const item of string) {
        if (item === 'a') {
            findA = true
        } else if (findA && item === 'b') {
            return true
        } else {
            findA = false;
        }
    }

    return false
}

console.log(match('xxxac'))