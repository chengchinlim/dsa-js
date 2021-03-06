
const http = require('http');

const arrayStrings = require('./array-strings')

const hostname = '127.0.0.1';
const port = 3111;

const server = http.createServer((req, res) => {

    // console.log(arrayStrings.q11_1('hash'))
    // console.log(arrayStrings.q11_1('pine'))
    // console.log(arrayStrings.q11_2('hash'))
    // console.log(arrayStrings.q11_2('pine'))
    //
    // console.log(arrayStrings.q12_1('steep', 'pests'))
    // console.log(arrayStrings.q12_1('stab', 'bats'))
    // console.log(arrayStrings.q12_2('steep', 'pests'))
    // console.log(arrayStrings.q12_2('stab', 'bats'))
    //
    // console.log(arrayStrings.q13_1('Mr Bean', 6))
    // console.log(arrayStrings.q13_1('Cheng eats rice', 13))
    // console.log(arrayStrings.q13_2('Mr Bean', 6))
    // console.log(arrayStrings.q13_2('Cheng eats rice', 13))
    //
    // console.log(arrayStrings.q14_1('Tact Coa'))
    // console.log(arrayStrings.q14_1('aaabb'))
    // console.log(arrayStrings.q14_1('aaabbb'))
    //
    // console.log(arrayStrings.q15_1('pale', 'ple'))
    // console.log(arrayStrings.q15_1('pales', 'pale'))
    // console.log(arrayStrings.q15_1('pale', 'bale'))
    // console.log(arrayStrings.q15_1('pale', 'bake'))
    //
    // console.log(arrayStrings.q16_1('aabcccccaaa'))
    // console.log(arrayStrings.q16_1('piggy'))
    // console.log(arrayStrings.q16_1('pigggggy'))
    //
    // console.log(arrayStrings.q17_1([
    //     ['a', 'b', 'c', 'd'],
    //     ['e', 'f', 'g', 'h'],
    //     ['i', 'j', 'k', 'l'],
    //     ['m', 'n', 'o', 'p'],
    // ]))
    // console.log(arrayStrings.q17_1([
    //     ['1', '2', '3', '4', '5'],
    //     ['6', '7', '8', '9', '10'],
    //     ['11', '12', '13', '14', '15'],
    //     ['16', '17', '18', '19', '20'],
    //     ['21', '22', '23', '24', '25'],
    // ]))
    //
    // console.log(arrayStrings.q18_1([
    //     [0, 1, 2, 3, 4, 5],
    //     [2, 4, 6, 8, 10, 12],
    //     [5, 7, 9, 11, 0, 5],
    // ]))
    // console.log(arrayStrings.q18_1([
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 0, 8],
    //     [10, 11, 12],
    // ]))

    console.log(arrayStrings.q19_1('waterbottle', 'erbottlewat'))
    console.log(arrayStrings.q19_1('waterbottle', 'wabottleter'))
    console.log(arrayStrings.q19_1('waterbottle', 'bottlewater'))

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Cracking the code');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})