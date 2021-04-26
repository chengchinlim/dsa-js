
const http = require('http');

const arrayStrings = require('./cracking-the-code/array-strings')

const hostname = '127.0.0.1';
const port = 3111;

const server = http.createServer((req, res) => {

    // console.log(arrayStrings.q11_1('hash'))
    // console.log(arrayStrings.q11_1('pine'))
    // console.log(arrayStrings.q11_2('hash'))
    // console.log(arrayStrings.q11_2('pine'))

    // console.log(arrayStrings.q12_1('steep', 'pests'))
    // console.log(arrayStrings.q12_1('stab', 'bats'))
    // console.log(arrayStrings.q12_2('steep', 'pests'))
    // console.log(arrayStrings.q12_2('stab', 'bats'))

    // console.log(arrayStrings.q13_1('Mr Bean', 6))
    // console.log(arrayStrings.q13_1('Cheng eats rice', 13))
    // console.log(arrayStrings.q13_2('Mr Bean', 6))
    // console.log(arrayStrings.q13_2('Cheng eats rice', 13))

    // console.log(arrayStrings.q14_1('Tact Coa'))
    // console.log(arrayStrings.q14_1('aaabb'))
    // console.log(arrayStrings.q14_1('aaabbb'))

    // console.log(arrayStrings.q15_1('pale', 'ple'))
    // console.log(arrayStrings.q15_1('pales', 'pale'))
    // console.log(arrayStrings.q15_1('pale', 'bale'))
    // console.log(arrayStrings.q15_1('pale', 'bake'))

    console.log(arrayStrings.q16_1('aabcccccaaa'))
    console.log(arrayStrings.q16_1('piggy'))
    console.log(arrayStrings.q16_1('pigggggy'))

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Cracking the code');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})