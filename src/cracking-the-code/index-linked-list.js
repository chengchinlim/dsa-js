
const http = require('http');

const linkedList = require('./linked-list')
const MyNode = require('./MyNode')
const LinkedList = require('./LinkedList')

const hostname = '127.0.0.1';
const port = 3131;

const server = http.createServer((req, res) => {

    const list = new LinkedList(MyNode(1))
    list.add(MyNode(3))
    list.add(MyNode(3))
    list.add(MyNode(3))
    list.add(MyNode(2))
    list.add(MyNode(2))
    list.add(MyNode(4))
    list.add(MyNode(2))

    // let head = linkedList.q21_1(list).head

    let head = linkedList.q22_1(4, list)
    while (head) {
        console.log(head.value)
        head = head.next
    }


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Cracking the code');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})