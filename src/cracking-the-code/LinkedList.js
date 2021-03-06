
class LinkedList {

    constructor(head) {
        this.head = head
    }

    add(node) {
        if (!this.head) {
            this.head = node
            return
        }
        let temp = this.head
        while (temp) {
            if (!temp.next) {
                temp.next = node
                break
            }
            temp = temp.next
        }
    }
}

module.exports = LinkedList