
const LinkedList = require('./LinkedList')
const MyNode = require('./LinkedNode')

module.exports = {
    // time: O(N^2)
    // space: O(1)
    q21_1: function removeDuplicates(list) {
        // 1. create 3 pointers
        //    1 - iterator
        //    2 - pointer to save reference when pointer 3 value is removed
        //    3 - to check value of each element
        let ptr1 = list.head
        // 2. iterate the 2nd and 3rd pointer to the end to check duplicate
        // 3. move the 1st pointer to the next element
        // 4. repeat step 2 and 3 until first pointer points to last element
        while (ptr1) {
            let ptr2 = ptr1
            while (ptr2) {
                let ptr3 = ptr2.next
                if (ptr3 && (ptr1.value === ptr3.value)) {
                    console.log(`duplicate:${ptr3.value}`)
                    ptr2.next = ptr3.next
                } else {
                    ptr2 = ptr2.next
                }
            }
            ptr1 = ptr1.next
        }
        return list
    },
    // time: O(n)
    // space: O(1)
    q22_1: function getKthToLast(k, list) {
        // 1. iterate a pointer until the kth element
        // 2. return the pointer
        let ptr1 = list.head
        let i = 1
        while (i < k && ptr1) {
            // console.log(ptr1.value)
            ptr1 = ptr1.next
            i++
        }
        return ptr1
    },
    // time: O(N)
    // space: O(1)
    q23_1: function deleteMidNode(letter, list) {
        // 1. create 2 pointers
        //    1 - iterator
        //    2 - to check element value
        let ptr1 = list.head
        while (ptr1) {
            let ptr2 = ptr1.next
            if (ptr2 && ptr2.value === letter) {
                ptr1.next = ptr2.next
            }
            ptr1 = ptr1.next
        }
        return list
    },
    q24_1: function partition() { // cannot understand the question

    },
    // time: O(n)
    // space: O(1)
    reverse: function reverseList(list) {
        // 1. create 2 pointers, ptr1 = head, 2 = ptr1.next
        // 2. point head to undefined, head.next to head
        // 3. iterate the pointers to the end of list
        // 4. repeat step 2-3
        let ptr1 = list.head
        let ptr2 = ptr1.next
        let ptr3 = ptr2.next
        ptr1.next = undefined
        // console.log(ptr2)
        while (ptr2) {
            ptr2.next = ptr1
            ptr1 = ptr2
            ptr2 = ptr3
            if (!ptr3) {
                break
            }
            ptr3 = ptr3.next

        }
        return ptr1
    },
    // time: O(N)
    // space: O(1)
    q25_1: function sumList(list1, list2) {
        // 1. create 2 pointers to start iterating both lists
        // 2. create a var 'carryOver'
        // 3. add list1[i] to list2[i] and 'carryOver' to get a value
        //    if value > 1 set 'carryOver' to 1
        // 4. save the value in the result linked list
        // 5. append the values in the longer linked list (not forgetting 'carryOver'
        const head1 = list1.head
        const head2 = list2.head
        const myList = new LinkedList(undefined)
        let temp1 = head1
        let temp2 = head2
        let carryOver = 0
        while (temp1 && temp2) {
            let value = temp1.value + temp2.value + carryOver
            if (value >= 10) {
                carryOver = 1
                value -= 10
            } else {
                carryOver = 0
            }
            myList.add(MyNode(value))
            temp1 = temp1.next
            temp2 = temp2.next
        }
        while (temp1) {
            let value = temp1.value + carryOver
            if (value >= 10) {
                carryOver = 1
                value -= 10
            } else {
                carryOver = 0
            }
            myList.add(MyNode(value))
            temp1 = temp1.next
        }
        while (temp2) {
            let value = temp2.value + carryOver
            if (value >= 10) {
                carryOver = 1
                value -= 10
            } else {
                carryOver = 0
            }
            myList.add(MyNode(value))
            temp2 = temp2.next
        }
        if (carryOver > 0) {
            myList.add(MyNode(1))
        }
        return myList
    },
    // time: O(N)
    // space: O(N^2)
    q26_1: function isPalindrome(list) {
        let value = ''
        let reversed = ''
        let temp = list.head
        while (temp) {
            value = value.concat(temp.value)
            temp = temp.next
        }
        for (let i = value.length - 1; i >= 0; i--) {
            reversed = reversed.concat(value[i])
        }
        return value === reversed
    },
    // time: O(N)
    // space: O(N)
    q26_2: function isPalindrome2(list) {
        let fast = list.head
        let slow = list.head
        const values = []
        while (fast) {
            values.push(slow.value)
            fast = fast.next
            if (fast) {
                fast = fast.next
                slow = slow.next
            }
        }
        while (values.length > 0) {
            if (slow.value !== values.pop()) {
                return false
            }
            slow = slow.next
        }
        return true
    },
    q27_1: function intersection() {
        // need to access memory reference (kinda impossible from JS)
    },
    q28_1: function loopDetection() {
        // need to access memory reference (kinda impossible from JS)
    }

}