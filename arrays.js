/***************************************
 * Array index start at position 0
 * e.g.,
 * let myGrades = [95, 100, 76, 100, 85 ];
 * // index 0 is 95
 * // index 1 is 100
 * // index 2 is 76
 * // index 3 is 100
 * // index 4 is 85
 ***************************************/
// example of an array of numbers
console.log("example of an array of numbers")
let myGrades = [95, 100, 76, 100, 85 ];
console.log(myGrades[2]); // returns 76
console.log(myGrades[0]); // returns 95
console.log(myGrades.length); // returns the total # of items in the array

// example of an array of characters
console.log("example of an array of characters")
let someStringVariable = "example of an array of characters";
console.log(someStringVariable[0]); // returns e
console.log(someStringVariable[11]); // returns a

console.log("someStringVariable length is " + someStringVariable.length); // returns 33

// loop statement to iterate through the entire someStringVariable array
for (let i = 0; i < someStringVariable.length; i++) {
    console.log(someStringVariable[i]);
}
