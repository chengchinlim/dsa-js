
// Aim - Time complexity: O(n)

module.exports = (pricesArr) => {
    let maxProfit = 0
    let lowest = pricesArr[0]
    let i = 1
    while (i < pricesArr.length) {
        if (pricesArr[i] - lowest > maxProfit) {
            maxProfit = pricesArr[i] - lowest
        }
        if (pricesArr[i] < lowest) {
            lowest = pricesArr[i]
        }
        i++
    }
    return maxProfit
}