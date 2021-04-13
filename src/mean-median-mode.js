
module.exports = (arr) => {
    console.log(getMean(arr))
    console.log(getMedian(arr))
    console.log(getMode(arr))
}

function getMean(arr) {
    return arr.reduce((a, b) => {
        return a + b
    }) / arr.length
}

function getMedian(arr) {
    arr.sort((a, b) => {
        if (a < b) {
            return -1
        }
        return 1
    })
    if (arr.length % 2 === 1) {
        return arr[Math.trunc(arr.length / 2)]
    }
    const first = arr[Math.trunc(arr.length / 2) - 1]
    const second = arr[Math.trunc(arr.length / 2)]
    return (first + second) / 2
}

function getMode(arr) {
    const map = {}
    let maxElements = []
    let max = 0
    arr.forEach(element => {
        let count = map[element.toString()]
        if (count) {
            count++
        } else {
            count = 1
        }
        map[element.toString()] = count
        if (count > max) {
            maxElements = []
            maxElements.push(element.toString())
            max = count
        } else if (count === max) {
            maxElements.push(element.toString())
        }
    })
    const modes = Object.values(map)
    modes.sort((a, b) => {
        if (a < b) {
            return -1
        }
        return 1
    })
    if (modes[0] === modes[modes.length - 1]) {
        return 0
    }
    return maxElements
}