
module.exports = (text) => {
    const textLength = text.length
    let stackSize = textLength / 2
    let skipFirstChar = false
    if (textLength % 2 === 1) {
        skipFirstChar = true
    }
    const stack = []
    for (let i = 0; i < stackSize; i++) {
        stack.push(text[i])
    }
    let reversed = ''
    while (stack.length > 0) {
        reversed += stack.pop()
    }
    if (skipFirstChar) {
        reversed = reversed.substring(1, reversed.length)
        stackSize++
    }
    const secondPart = text.substring(stackSize, text.length)
    console.log(reversed)
    console.log(secondPart)
    return secondPart === reversed
}