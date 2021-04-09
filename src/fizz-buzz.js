
// assume number is 20
// we need to check if each number is divisible by 3, 5
// if only 3: fizz
// if only 5: buzz
// if both: fizz-buzz
// if none: print the number

module.exports = (number) => {
    // loop through the list of numbers
    // check if the number is divisible by 3
    // check if the number is divisible by 5
    // use 2 boolean variables to save the results
    // compare it and assign the result
    for (let i = 0; i <=  number; i++) {
        let isDivisibleByThree = false
        let isDivisibleByFive = false
        if (i % 3 === 0) {
            isDivisibleByThree = true
        }
        if (i % 5 === 0) {
            isDivisibleByFive = true
        }
        if (isDivisibleByThree && isDivisibleByFive) {
            console.log('fizz-buzz')
        } else if (isDivisibleByThree) {
            console.log('fizz')
        } else if (isDivisibleByFive) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}