

const http = require('http');

const hostname = '127.0.0.1';
const port = 3111;

const fizzBuzz = require('./fizz-buzz')
const harmlessRansomNote = require('./harmless-ransom-note')
const isPalindrome = require('./is-palindrome')
const isPalindromeSolution = require('./is-palindrome-solution')
const caesarCipher = require('./caesar-cipher')
const reverseWords = require('./reverse-words')
const reverseArray = require('./reverse-array')
const getMeanMedianMode = require('./mean-median-mode')
const twoSum = require('./two-sum')
const binarySearch = require('./binary-search')

const server = http.createServer((req, res) => {

    // fizzBuzz(30)

    // const noteText = 'Cheng Chin likes basketball'
    // const magazineText = 'My name is Cheng Chin likes to play basketball'
    // console.log(harmlessRansomNote(noteText, magazineText))

    // console.log(isPalindrome('racescar'))
    // console.log(isPalindromeSolution('raccar'))

    // console.log(caesarCipher('abc', 1))
    // console.log(caesarCipher('abc', 26))
    // console.log(caesarCipher('abc', 28))
    // console.log(caesarCipher('cheng', -1))
    // console.log(caesarCipher('cheng', -3))
    // console.log(caesarCipher('zookeeper', 2))
    // console.log(caesarCipher('bigcar', -16))
    // console.log(caesarCipher('javascript', -900))

    // console.log(reverseWords('This is Cheng'))
    // console.log(reverseWords('Coding Javascript'))

    // console.log(reverseArray(['C', 'h', 'e', 'n', 'g']))
    // console.log(reverseArray(['C', 'h', 'e', 'n', 'g', 'L', 'i', 'm']))
    // console.log(reverseArray([1, 2, 3, 4, 5, 6]))
    // console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]))

    // getMeanMedianMode([1, 2, 3, 4, 10, 10])
    // getMeanMedianMode([1, 2, 3, 4, 5, 3])
    // getMeanMedianMode([1, 2, 3, 4, 5, 4, 6, 1])
    // getMeanMedianMode([9, 10, 23, 10, 23, 9])

    // console.log(twoSum([1, 6, 4, 5, 3, 3], 7))
    // console.log(twoSum([40, 11, 19, 17, -12], 28))

    console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
    console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8))
    console.log(binarySearch([2, 4, 6, 8, 10, 12], 3))
    console.log(binarySearch([1, 3, 5, 7, 9, 11], 8))

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});