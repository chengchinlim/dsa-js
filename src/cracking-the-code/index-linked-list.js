
const http = require('http');

const linkedList = require('./linked-list')
const MyNode = require('./MyNode')
const LinkedList = require('./LinkedList')

const hostname = '127.0.0.1';
const port = 3131;

const server = http.createServer((req, res) => {

    // const list = new LinkedList(MyNode(1))
    // list.add(MyNode(3))
    // list.add(MyNode(3))
    // list.add(MyNode(3))
    // list.add(MyNode(2))
    // list.add(MyNode(2))
    // list.add(MyNode(4))
    // list.add(MyNode(2))

    // let head = linkedList.q21_1(list).head

    // let head = linkedList.q22_1(4, list)

    const lettersList = new LinkedList(MyNode('a'))
    lettersList.add(MyNode('b'))
    lettersList.add(MyNode('c'))
    // lettersList.add(MyNode('d'))
    // lettersList.add(MyNode('e'))
    // lettersList.add(MyNode('f'))
    lettersList.add(MyNode('c'))
    lettersList.add(MyNode('b'))
    lettersList.add(MyNode('a'))

    // let head = linkedList.q23_1('c', lettersList).head
    // let head = linkedList.q23_1('e', lettersList).head


    // const list1 = new LinkedList(MyNode(6))
    // list1.add(MyNode(8))
    // list1.add(MyNode(9))
    // const list2 = new LinkedList(MyNode(2))
    // list2.add(MyNode(7))

    // const list1 = new LinkedList(MyNode(5))
    // list1.add(MyNode(2))
    // list1.add(MyNode(3))
    // list1.add(MyNode(9))
    // const list2 = new LinkedList(MyNode(4))
    // list2.add(MyNode(6))
    // list2.add(MyNode(7))
    //
    // let head = linkedList.q25_1(list1, list2).head

    // let head = linkedList.reverse(lettersList)
    //
    // while (head) {
    //     console.log(head.value)
    //     head = head.next
    // }

    // console.log(linkedList.q26_1(lettersList))
    console.log(linkedList.q26_2(lettersList))


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Cracking the code');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})