// ASSESSMENT 2: Coding practical questions with Jest

// const { expect } = require("@jest/globals")
// const { test } = require("jest-circus")
// const { capitalize } = require("lodash")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
//create a test suite for function isDivisibleByThree
describe("isDivisbleByThree", () =>{




// These are the inputs we want to test

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"


//creating 3 tests, one for each test variable

//testing whether a number that should be divisble by three returns the appropriate string
test("returns string if number is divisible by three",()=>{
    //using the variables from above
    expect(isDivisibleByThree(num1)).toEqual(`${num1} is divisible by three`)
})
test("returns string if 0 is divisible by three",()=>{
    expect(isDivisibleByThree(num2)).toEqual(`${num2} is divisible by three`)
})
test("returns string if number is not divisible by three",()=>{
    expect(isDivisibleByThree(num3)).toEqual(`${num3} is not divisible by three`)
})


})

// b) Create the function that makes the test pass.

//create a function isDivisibleByThree that takes in a number
const isDivisibleByThree = (num) => {
    //check if the number is divisible by 3 by dividing by 3 and comparing the remainder to 0
    if(num % 3 === 0){
        //if number is divisble by three, return this
        return `${num} is divisible by three`
    }else{
        //otherwise, return this.
        return `${num} is not divisible by three`
    }

}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//create a test suite for capitalizeWords
describe("capitalizeWords",() =>{
 
    //inputs
    var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

    //outputs
    const randomNouns2Output = ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    const randomNouns1Output =  ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    
    // create a test to check if output is create
    test("returns array of strings with each string capitalized",() =>{
        //expect for the first test variable
        expect(capitalizeWords(randomNouns1)).toEqual(randomNouns1Output)
        //expect for the second test variable
        expect(capitalizeWords(randomNouns2)).toEqual(randomNouns2Output)
    })

})

// b) Create the function that makes the test pass.
//create function that takes an array
const capitalizeWords = (array) =>{
    //for each item in the array
    //split the array, capitalize the first letter, then join the items back into a string
    const capitalizedWords = array.map((word) =>{
        //split string into array
        let splitWord = word.split("")
        //capitalize first letter/item in array
        splitWord[0] = splitWord[0].toUpperCase()
        return splitWord.join("")
    })

    // return transformed array
    return capitalizedWords
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel",() =>{
    //inputs and outputs
    var vowelTester1 = "learn"
    // Expected output: 1
    var vowelTester1Output = 1

    var vowelTester2 = "academy"
    // Expected output: 0
    var vowelTester2Output = 0

    var vowelTester3 = "challenge"
    // Expected output: 2
    var vowelTester3Output

    test("returns index of first vowel",() =>{
        expect(firstVowel(vowelTester1)).toEqual(vowelTester1Output)
        expect(firstVowel(vowelTester2)).toEqual(vowelTester2Output)
    })


})

// b) Create the function that makes the test pass.
//create functions that takes a string
const firstVowel = (string) =>{
    //list vowels
    const vowels = ["a","b","c","d","e"]

    //go over each character in string, starting from the beginning
    for(let i = 0; i < string.length; i++){
        //if the character is one of the vowels
        //return the index we used to access the character
        if (vowels.includes(string[i])) return i
    }
    return "perhaps you were looking for y?"

}