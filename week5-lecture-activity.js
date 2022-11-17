//create a new array with multiple values in it
let students = ["Brandon", "Vanessa", "Ruben", "Matthew", "Aaron", "Xavier", "Alexis"];
// display the first value
console.log(students[0]);
// display the last value
console.log(students[6]);
// out of bounds - undefined
console.log(students[7]);
// display length of the array
console.log(students.length);

// for loop iterating through the array
console.log("Array at initial value");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// push 5 more values in the array
students.push("Jonathan1"); // ["Brandon", "Vanessa", "Ruben", "Matthew", "Aaron", "Xavier", "Alexis", "Jonathan1"];
students.push("Jonathan2"); // ["Brandon", "Vanessa", "Ruben", "Matthew", "Aaron", "Xavier", "Alexis", "Jonathan1", "Jonathan2"];
students.push("Jonathan3"); // ["Brandon", "Vanessa", "Ruben", "Matthew", "Aaron", "Xavier", "Alexis", "Jonathan1", "Jonathan2", "Jonathan3"];
students.push("Jonathan4"); // ["Brandon", "Vanessa", "Ruben", "Matthew", "Aaron", "Xavier", "Alexis", "Jonathan1", "Jonathan2", "Jonathan3", , "Jonathan4"];
students.push("Jonathan5"); // ["Brandon", "Vanessa", "Ruben", "Matthew", "Aaron", "Xavier", "Alexis", "Jonathan1", "Jonathan2", "Jonathan3", , "Jonathan4", "Jonathan5"];

// for loop iterating through the array
console.log("\n\nArray after push");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// use pop() 3 times
students.pop(); // // ["Brandon", "Vanessa", "Ruben", "Matthew", "Aaron", "Xavier", "Alexis", "Jonathan1", "Jonathan2", "Jonathan3", , "Jonathan4"];
students.pop(); // // ["Brandon", "Vanessa", "Ruben", "Matthew", "Aaron", "Xavier", "Alexis", "Jonathan1", "Jonathan2", "Jonathan3"];
students.pop(); // // ["Brandon", "Vanessa", "Ruben", "Matthew", "Aaron", "Xavier", "Alexis", "Jonathan1", "Jonathan2"];

// for loop iterating through the array
console.log("\n\nArray after push");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
