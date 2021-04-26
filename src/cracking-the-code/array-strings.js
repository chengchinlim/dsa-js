
// format
// time:
// space:

// time: O(n)
// space: O(1)
function getAsciiCountArr(s) {
    const charArrCount = new Array(128)
    for (let i = 0; i < s.length; i++) {
        const asciiNum = s.charCodeAt(i)
        let count = charArrCount[asciiNum]
        if (count) {
            charArrCount[asciiNum] = ++count
        } else {
            charArrCount[asciiNum] = 1
        }
    }
    return charArrCount
}

module.exports = {
    // time: O(n^2)
    // space: O(n)
    q11_1: function isUnique(s) {
        const charArr = []
        for (let i = 0; i < s.length; i++) {
            const temp = s.charAt(i)
            if (charArr.includes(temp)) { // O(n)
                return false
            }
            charArr.push(temp)
        }
        return true
    },
    // time: O(n)
    // space: O(1)
    q11_2: function (s) {
        const charArr = new Array(128)
        for (let i = 0; i < s.length; i++) {
            const asciiNum = s.charCodeAt(i)
            if (charArr[asciiNum] === true) {
                return false
            }
            charArr[asciiNum] = true
        }
        return true
    },
    // time: O(n * log n)
    // space: O(n^2)
    q12_1: function checkPermutation(s1, s2) {
        return [...s1].sort().join('') === [...s2].sort().join('')
    },
    // time: O(n)
    // space: O(1)
    q12_2: function (s1, s2) {
        const charArrCount = getAsciiCountArr(s1)
        for (let i = 0; i < s2.length; i++) {
            const asciiNum = s2.charCodeAt(i)
            let count = charArrCount[asciiNum]
            if (!count || count < 0) {
                return false
            } else {
                charArrCount[asciiNum] = --count
            }
        }
        return true
    },
    // time: not sure because of 'replaceAll'
    // space: not sure because of 'replaceAll'
    q13_1: function urlify(s, len) { // has to be in place
        const spaceChar = '%20'
        return s.replaceAll(' ', '%20')
    },
    // time: O(n)
    // space: O(n^2)
    q13_2: function (s, len) {
        const result = []
        const spaceChar = '%20'
        for (let i = 0; i < s.length; i++) {
            const char = s.charAt(i)
            if (char === ' ') {
                result.push(spaceChar)
            } else {
                result.push(char)
            }
        }
        return result.join('')
    },
    // time: O(n)
    // space: O(n^2)
    q14_1: function palindromePermutation(s) {
        const str = s
            .replace(/\s+/g, '')
            .toLowerCase()
        const charArrCount = getAsciiCountArr(str)
        let oddNumCount = 0
        for (let i = 0; i < charArrCount.length; i++) {
            if (charArrCount[i] % 2 === 1) {
                oddNumCount++
            }
            if (oddNumCount > 1) {
                return false
            }
        }
        return true
    },
    // time: O(N)
    // space: O(1)
    q15_1: function oneAway(s1, s2) {
        // 1. Convert s1 into an ascii count array
        //    e.g. ace = [..., 1, 0, 1, 0, 1, ...]
        const asciiCountArr = getAsciiCountArr(s1)
        // 2  Iterate thru each character of s2
        //    and minus the count from ascii count array
        //    if the ascii number matches
        for (let i = 0; i < s2.length; i++) {
            const asciiNum = s2.charCodeAt(i)
            let count = asciiCountArr[asciiNum]
            if (count) {
                asciiCountArr[asciiNum] = --count
            } else {
                asciiCountArr[asciiNum] = -1
            }
        }
        // 3. If
        //    1. any value in the array is > 1 or < -1
        //    2. the whole array has more than one 1
        //       AND has more than one -1,
        //    return false
        //    Else return true
        let numberOfNegatives = 0
        let numberOfPositives = 0
        for (let i = 0; i < asciiCountArr.length; i++) {
            if (asciiCountArr[i] < -1 || asciiCountArr[i] > 1) {
                return false
            }
            if (asciiCountArr[i] === -1) {
                numberOfNegatives++
            } else if (asciiCountArr[i] === 1) {
                numberOfPositives++
            }
            if (numberOfNegatives > 1 && numberOfPositives > 1) {
                return false
            }
        }
        return true
    },
    // time: O(N)
    // space: O(N)
    q16_1: function stringCompression(s) {
        // Iterate the chars in the string
        // 1. Create a counter for the first char,
        //    If the following char is same as previous char,
        //    increment the counter
        let counter = 1
        let tempChar = s.charAt(0)
        const charArr = []
        for (let i = 1; i < s.length; i++) {
            if (s.charAt(i) === tempChar) {
                counter++
            } else {
                // 2. If the char is different
                //    append the char and count to the result string,
                //    reset the counter and tempChar
                charArr.push(`${tempChar}${counter}`)
                counter = 1
                tempChar = s.charAt(i)
            }
            // 3. If the result string is longer than the original string,
            //    return the original string
            if (charArr.join('').length >= s.length) {
                return s
            }
            if (i === s.length - 1) {
                charArr.push(`${tempChar}${counter}`)
            }
        }
        return charArr.join('')
    }
}