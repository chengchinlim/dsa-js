
const http = require('http');

const hostname = '127.0.0.1';
const port = 3131;
const GraphNode = require('./GraphNode')
const Graph = require('./Graph')
const graphTree = require('./graph-tree')
const TreeNode = require('./TreeNode')


const server = http.createServer((req, res) => {

    // const node1 = new GraphNode('a')
    // const node2 = new GraphNode('b')
    // const node3 = new GraphNode('c')
    // const node4 = new GraphNode('d')
    // const node5 = new GraphNode('e')
    // const node6 = new GraphNode('f')
    // const node7 = new GraphNode('g')
    // node1.add(node2)
    // node2.add(node3)
    // node4.add(node5)
    // node5.add(node2)
    // node5.add(node7)
    // node6.add(node5)
    // const graph = new Graph()
    // graph.add(node1)
    // graph.add(node2)
    // graph.add(node3)
    // graph.add(node4)
    // graph.add(node5)
    // graph.add(node6)
    // graph.add(node7)

    // let i = graph.nodes.length - 1
    // while (i >= 0) {
    //     console.log(graph.nodes[i].value)
    //     console.log(graph.nodes[i].children)
    //     i--
    // }

    // console.log(graphTree.q41_1('a', 'c', graph))
    // console.log(graphTree.q41_1('f', 'b', graph))
    // console.log(graphTree.q41_1('d', 'g', graph))
    // console.log(graphTree.q41_1('a', 'd', graph))
    // console.log(graphTree.q41_1('b', 'g', graph))

    const node1 = new TreeNode(1)
    const node2 = new TreeNode(2)
    const node3 = new TreeNode(3)
    const node4 = new TreeNode(4)
    const node5 = new TreeNode(5)
    const node6 = new TreeNode(6)
    const node7 = new TreeNode(7)
    node4.leftChild = node2
    node4.rightChild = node6
    node2.leftChild = node1
    node2.rightChild = node3
    node6.leftChild = node5
    node6.rightChild = node7

    console.log(graphTree.q43_1(node4))


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Cracking the code');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})