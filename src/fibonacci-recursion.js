
function fibRecursion(position) {
    if (position === 1 || position === 2) {
        return 1
    }
    return fibRecursion(position - 1) + fibRecursion(position - 2)
}

module.exports = fibRecursion