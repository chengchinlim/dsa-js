
const http = require('http');

const hostname = '127.0.0.1';
const port = 3111;

const fizzBuzz = require('./fizz-buzz')
const harmlessRansomNote = require('./harmless-ransom-note')

const server = http.createServer((req, res) => {

    // fizzBuzz(30)

    const noteText = 'Cheng likes basketball shoes'
    const magazineText = 'My name is Cheng Cheng likes to play basketball'
    console.log(harmlessRansomNote(noteText, magazineText))

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});