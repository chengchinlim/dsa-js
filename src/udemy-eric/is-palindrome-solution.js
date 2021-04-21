
module.exports = (text) => {
    const charArr = []
    for (let i = 0; i < text.length; i++) {
        charArr.push(text[i])
    }
    return charArr.join('') === charArr.reverse().join('')
}