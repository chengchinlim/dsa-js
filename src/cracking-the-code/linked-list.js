
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
    }
}