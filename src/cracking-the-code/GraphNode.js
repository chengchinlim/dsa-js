
class GraphNode {

    constructor(value) {
        this.value = value
        this.visited = false
        this.children = []
    }

    add(node) {
        this.children.push(node)
    }

}

module.exports = GraphNode