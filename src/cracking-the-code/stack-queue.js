
module.exports = {
    // q31_1
    // size of array / n

    // q32_1 Stack Min
    // Time: O(1)
    // Space: O(N)
    // 1. create a type {value: number, min: number}
    // 2. every time an element is pushed, compared it to previous element min
    //    if the value is smaller, set current element value to current element min
    //    else use the set previous element min to current element min

    // q33_1 Stack of plates
    // 1. create a class 'PlateStack' and create a int variable 'maxHeight'
    // 2. create an array of array variable 'listOfStacks' (2D array)
    // 3. for push()
    //    if the current stack height > 4, create a new stack and push the element
    //    else push the element to the last stack
    //    for pop()
    //    pop from the top element of the last stack
    //    for popAt(index)
    //    if the index is out of range, throw error
    //    else pop the stack at the index
    //      if the stack is empty after pop() remove the stack
    //      move the bottom of the stack to the previous stack
    //      Caveat: High Time Complexity

    // q34_1 Queue using 2 stacks
    // 1. Create 2 stacks 'topNewest' and 'topOldest'
    // 2. When push() is called, push element into 'topNewest'
    // 3. When customShift() is called,
    //    if 'topOldest' is empty, pop all elements from 'topNewest'
    //       and push it to 'topOldest'
    //    pop() from 'topOldest'

    // ** can only use one extra stack for space **
    // time: O(N^2)
    // space: O(N)
    q35_1: function sortStack(stack) {
        // 1. create a stack 'buffer'
        // 2. while the stack is not empty
        //      while pop() element from 'stack'
        //          is greater than top element from 'buffer'
        //          push the top element from 'buffer' to 'stack'
        //      push the pop() element from 'stack' into 'buffer'
        const buffer = []
        while (stack.length > 0) {
            const element = stack.pop()
            while (element > buffer[buffer.length - 1]) {
                stack.push(buffer.pop())
            }
            buffer.push(element)
        }
        return buffer
    }

    // q36_1 Animal shelter (Works but more complicated)
    // element: {type: dog | cat}
    // enqueue(): push element into 'queue'
    // dequeue(): remove the 1st element from 'queue'
    // dequeueCat():
    //      while 1st element from 'queue' is not cat
    //          push it to 'buffer' queue
    //      after getting cat push all elements from 'buffer' back to 'queue'
    // dequeueDog():
    //      while 1st element from 'queue' is not dog
    //          push it to 'buffer' queue
    //      after getting dog push all elements from 'buffer' back to 'queue'

    // q36_2 Use OOP and maintain 2 queues

}