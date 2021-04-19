
// assume array is sorted
// aim for O(log n)
// use recursion

function binarySearch(numArr, key) {
    const originalArr = [...numArr]
    const midIndex = Math.trunc(numArr.length / 2)
    const firstArr = numArr.splice(0, midIndex)
    if (key === originalArr[midIndex]) {
        return key
    } else if (firstArr.length === 0) {
        return undefined
    } else if (key < originalArr[midIndex]) {
        // console.log('1st arr')
        // console.log(firstArr)
        return binarySearch(firstArr, key)
    } else if (key > originalArr[midIndex]) {
        // console.log('2nd arr')
        // console.log(numArr)
        return binarySearch(numArr, key)
    }
}

module.exports = binarySearch