
module.exports = (position) => {
    if (position === 1 || position === 2) {
        return 1
    }
    let result = 0
    let first = 1
    let second = 1
    for (let i = 3; i <= position; i++) {
        result = first + second
        first = second
        second = result
    }
    return result
}