
// reverse array in place
// should not use Array.reverse() method

module.exports = (arr) => {
    const half = arr.length / 2
    let tempIndex = arr.length - 1
    for (let i = 0; i < half; i++) {
        const temp = arr[i]
        arr[i] = arr[tempIndex]
        arr[tempIndex] = temp
        tempIndex--
    }
    return arr
}