
// encrypt the string by shifting the letter
// based on the number given
// e.g. (abc, 1) should return bcd
// (cheng, -3) should return zebkd

module.exports = (str, num) => {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const cipher = []
    str.split('').forEach(cha => {
        const charIndex = alphabets.indexOf(cha)
        let newIndex = charIndex + num
        newIndex %= 26
        let temp = ''
        // console.log(newIndex)
        if (newIndex < 0) {
            let tempIndex = alphabets.length - 1
            for (let i = -1; i >= newIndex; i--) {
                temp = alphabets[tempIndex]
                tempIndex--
                // console.log(temp)
            }
        } else {
            temp = alphabets[newIndex]
        }
        cipher.push(temp)
    })
    return cipher.join('')
}