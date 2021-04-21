
// check if all the words in the note texts
// exist in the magazine text
// if all words exist, return true
// else return false
// time complexity goal is O(n)

module.exports = (noteText, magazineText) => {
    // 1. insert all words of the magazine text into a hash map
    //    of string -> number of occurrence
    // 2. loop through noteText to check if the word exists
    //    in the magazine
    // 3. if it exists, -1 from the number of occurrence
    //    of that key
    //    else return false
    // 4. if everything passes, return true

    // console.log(Date.now()) // test if js function runs twice

    const magazineMap = {}
    const magazineWords = magazineText.split(' ')
    for (let i = 0; i < magazineWords.length; i++) {
        let numberOfOccurrence = magazineMap[magazineWords[i]]
        if (numberOfOccurrence) {
            magazineMap[magazineWords[i]] = ++numberOfOccurrence
        } else {
            magazineMap[magazineWords[i]] = 1
        }
    }
    console.log(magazineMap)
    const noteWords = noteText.split(' ')
    for (let i = 0; i < noteWords.length; i++) {
        let numberOfOccurrence = magazineMap[noteWords[i]]
        if (!numberOfOccurrence) {
            console.log('Undefined number of occurrence')
            console.log(magazineMap)
            return false
        }
        numberOfOccurrence--
        if (numberOfOccurrence < 0) {
            console.log('Number of occurrence < 0')
            console.log(magazineMap)
            return false
        }
        magazineMap[noteWords[i]] = numberOfOccurrence
    }
    console.log(magazineMap)
    return true
}