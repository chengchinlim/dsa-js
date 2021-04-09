

const http = require('http');

const hostname = '127.0.0.1';
const port = 3111;

const fizzBuzz = require('./fizz-buzz')
const harmlessRansomNote = require('./harmless-ransom-note')
const isPalindrome = require('./is-palindrome')
const isPalindromeSolution = require('./is-palindrome-solution')

const server = http.createServer((req, res) => {

    // fizzBuzz(30)

    // const noteText = 'Cheng Chin likes basketball'
    // const magazineText = 'My name is Cheng Chin likes to play basketball'
    // console.log(harmlessRansomNote(noteText, magazineText))

    // console.log(isPalindrome('racescar'))
    console.log(isPalindromeSolution('raccar'))

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});