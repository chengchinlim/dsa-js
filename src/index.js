

const http = require('http');

const hostname = '127.0.0.1';
const port = 3111;

const fizzBuzz = require('./fizz-buzz')
const harmlessRansomNote = require('./harmless-ransom-note')
const isPalindrome = require('./is-palindrome')
const isPalindromeSolution = require('./is-palindrome-solution')
const caesarCipher = require('./caesar-cipher')

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
    console.log(caesarCipher('javascript', -900))


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});