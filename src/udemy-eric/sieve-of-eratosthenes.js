
// find all prime numbers up to `num` in an array
// e.g sieveOfEratosthenes(20) should return
// [2, 3, 5, 7, 11, 13, 17, 19]

module.exports = (num) => {
    const isPrimeArr = []
    for (let i = 0; i <= num; i++) {
        let bool = true
        if (i === 2 || i === 3) {
            isPrimeArr.push(bool)
            continue
        }
        if (i % 2 === 0) {
            bool = false
            isPrimeArr.push(bool)
            continue
        }
        const squared = Math.trunc(Math.sqrt(i))
        for (let j = 3; j <= squared; j+=2) {
            if (i % j === 0) {
                bool = false
                isPrimeArr.push(bool)
                break
            }
        }
        if (bool === true) {
            isPrimeArr.push(bool)
        }
    }

    const numArr = isPrimeArr
        .map((_, index) => {
            return index
        })

    return numArr
        .filter((element, index) => {
            if (index < 2) {
                return false
            }
            if (isPrimeArr[index] === true) {
                return element
            }
        })
}