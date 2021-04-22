
// sort array using bubble sort (in-place)

module.exports = (nums) => {
    let tempIndex = nums.length - 1
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < tempIndex; j++) {
            const first = nums[j]
            const second = nums[j + 1]
            if (second < first) {
                nums[j] = second
                nums[j + 1] = first
            }
        }
        tempIndex--
    }
    return nums
}