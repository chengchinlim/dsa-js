
// reverse the words in a string but not the order
// should not use Array.reverse() method
// e.g. 'This is Cheng' to 'sihT si gnehC'

module.exports = (sentence) => {
    const words = sentence.split(' ')
    const reversedWords = []
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        const charArray = []
        for (let j = word.length - 1; j >= 0; j--) {
            charArray.push(word[j])
        }
        reversedWords.push(charArray.join(''))
    }
    return reversedWords.join(' ')
}