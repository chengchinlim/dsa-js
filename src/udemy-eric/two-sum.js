
// return array of arrays
// any number in array can be used in multiple pairs
// aim for O(n) time complexity
// e.g. [1, 6, 4, 5, 3, 3] and 7
// should return [[6, 1], [3, 4], [3, 4]]

module.exports = (numArr, sum) => {
    // 1. insert all values of numArr into a map (value to array of indices)
    // 2. loop the array, minus the value of element from the sum
    //    check if that element exist
    //    if it exists, map those values in another map
    //    (first to second, second to first)
    //    to prevent duplicates
    //    and push it into array of arrays
    //    if not move to the next element
    const results = []
    const numArrMap = {}
    numArr.forEach((num, index) => {
        const indices = numArrMap[num]
        if (indices) {
            indices.push(index)
        } else {
            numArrMap[num] = [index]
        }
    })
    console.log(numArrMap)
    const resultMap = {}
    numArr.forEach((num, index) => {
        const diff = sum - num
        const indices = numArrMap[diff]
        if (indices) {
            for (let i = 0; i < indices.length; i++) {
                const tempIndex = indices[i]
                if (
                    (resultMap[index]
                        && resultMap[index] === tempIndex)
                    || (resultMap[tempIndex]
                        && resultMap[tempIndex] === index)
                ) {
                    continue
                }
                results.push([num, diff])
                resultMap[index] = tempIndex
                break
            }
        }
    })
    return results
}