
// param is unsorted array
function mergeSort(nums) {
    if (nums.length < 2) {
        return nums
    }
    const midIndex = Math.trunc(nums.length / 2)
    const leftHalf = nums.slice(0, midIndex)
    const rightHalf = nums.slice(midIndex)
    // console.log(leftHalf)
    // console.log(nums)
    return merge(mergeSort(leftHalf), mergeSort(rightHalf))

    // console.log(merge([1, 3, 7, 8], [2, 4, 6, 9]))
}

// two sorted arrays as param
// returns one sorted array
function merge(arr1, arr2) {
    if (!arr1) {
        return arr2
    }
    if (!arr2) {
        return arr1
    }
    let sorted = []
    let i = 0
    let j = 0
    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sorted.push(arr1[i])
            if (i === arr1.length - 1) {
                arr2.splice(0, j)
                sorted = sorted.concat(arr2)
                break
            } else {
                i++
            }
        } else {
            sorted.push(arr2[j])
            if (j === arr2.length - 1) {
                // console.log(i)
                arr1.splice(0, i)
                // console.log(arr1)
                sorted = sorted.concat(arr1)
                break
            } else {
                j++
            }
        }
    }
    // console.log(sorted)
    return sorted
}

module.exports = mergeSort