
// cache param is an array

function fibonacciMem(index, cache) {
    if (index < 3) {
        cache[index - 1] = 1
    }
    if (cache[index - 1]) {
        return cache[index - 1]
    }
    return fibonacciMem(index - 1, cache)
        + fibonacciMem(index - 2, cache)

}

module.exports = fibonacciMem