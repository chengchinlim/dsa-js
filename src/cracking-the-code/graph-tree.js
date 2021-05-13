
const TreeNode = require('./TreeNode')

module.exports = {
    // time: O(N)
    // space: O(N)
    q41_1: function routeBetweenNodes(startValue, endValue, graph) {
        const nodes = graph.nodes
        let startNode
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].value === startValue) {
                startNode = nodes[i]
                break
            }
        }
        if (!startNode) {
            return false
        }
        // below is bfs
        let myQueue = []
        myQueue.push(startNode)
        while (myQueue.length > 0) {
            const firstNode = myQueue.shift()
            firstNode.isVisited = true
            if (firstNode.value === endValue) {
                return true
            }
            const children = firstNode.children
            if (children) {
                for (let i = 0; i < children.length; i++) {
                    if (!children[i].isVisited) {
                        children[i].isVisited = true
                        myQueue.push(children[i])
                    }
                }
            }
        }
        return false
    },
    q42_1: function getMinimalTree(sortedArr) {
        // 1. Get the mid element as root node
        // 2. Recursively get the mid element of sub arrays
        //    to become root node of sub trees
        function getMinimalTree(arr, start, end) {
            if (end < start) {
                return undefined
            }
            const mid = Math.trunc((start + end) / 2)
            const root = new TreeNode(arr[mid])
            root.leftChild = getMinimalTree(arr, start, mid - 1)
            root.rightChild = getMinimalTree(arr, mid + 1, end)
            return root
        }
        return getMinimalTree(sortedArr, 0, sortedArr.length - 1)
    },
    // time: O(N)
    // space: O(N)
    q43_1: function listOfDepths(treeNode) {
        // 1. Create 2 queues
        // 2. Insert root node to the 1st queue
        // 3. While any of queues are not empty
        //      While 1st queue is not empty
        //          Remove element from the 1st queue and insert into the same linked list
        //          Get its left and right child and insert to the 2nd queue
        //      While 2nd queue is not empty
        //          Remove element from the 2nd queue and insert into the same linked list
        //          Get its left and right child and insert to the 1st queue
        const queue1 = []
        const queue2 = []
        const listOfLists = []
        queue1.push(treeNode)
        while (queue1.length > 0 || queue2.length > 0) {
            let list = []
            while (queue1.length > 0) {
                const node = queue1.shift()
                list.push(node.value)
                const leftChild = node.leftChild
                const rightChild = node.rightChild
                if (leftChild) {
                    queue2.push(leftChild)
                }
                if (rightChild) {
                    queue2.push(rightChild)
                }
            }
            if (list.length > 0) {
                listOfLists.push(list)
            }
            list = []
            while (queue2.length > 0) {
                const node = queue2.shift()
                list.push(node.value)
                const leftChild = node.leftChild
                const rightChild = node.rightChild
                if (leftChild) {
                    queue1.push(leftChild)
                }
                if (rightChild) {
                    queue1.push(rightChild)
                }
            }
            if (list.length > 0) {
                listOfLists.push(list)
            }
        }
        return listOfLists
    }
}