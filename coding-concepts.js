// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.split(""))

// a) Your answer: ["C","h","a","r","l","i","e"," ","2","0","2","1"]
// b) Verify and explain: you split along each empty string, so each character is its own string item in the resulting array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: there's no return statement and there's no implicit return.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: map returns an array with each value transformed according to the function passed into it. 
  //in this case, each value is multiplied by 2.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: [12,14]
// b) Verify and explain: filter will return an array with only the values that evaluate as true.
  // In this case, a value with evaluate to true if value % 2 === 0 --or if there's no remainder after dividing by 2 (even numbers)
  // so the array will be filled with only even numbers

// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
console.log(learnStudent)

// a) Your answer: 


// {
//   student: "George",
//   cohort: "Charlie",
//   year: 2021
// }

// b) Verify and explain: we're logging an object that we created from the Learn class so we can see the object's properties
