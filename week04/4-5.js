function match(string) {
    let nextIndex = 0;
    const target = 'abcdef'

    for (const item of string) {
        if (target[nextIndex] === item) {
            nextIndex++
        } else {
            nextIndex =0
        }
        if (nextIndex === 6) {
            return true
        }
    }
    return false
}

console.log(match('abacada abcdef aaaa'))