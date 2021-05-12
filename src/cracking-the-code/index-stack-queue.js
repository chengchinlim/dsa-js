
const http = require('http');

const hostname = '127.0.0.1';
const port = 3131;

const stackQueue = require('./stack-queue')

const server = http.createServer((req, res) => {

    // console.log(stackQueue.q35_1([3, 5, 1, 4, 9]))
    console.log(stackQueue.q35_1([13, 5, 1, 2, 19]))

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Cracking the code');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})