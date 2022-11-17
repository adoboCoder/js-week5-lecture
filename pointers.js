// difference between by reference and by value
// new variable sandwich1
let sandwich1 = ["White bread", "Italian BMT", "Chipotle Southwest"];
// new variable sandwich2 reference to the actual object sandwich1
let sandwich2 = sandwich1;
// new variable sandwich3 with the same values as sandwich1
let sandwich3 = ["White bread", "Italian BMT", "Chipotle Southwest"];

console.log(sandwich1 === sandwich2); // sandwich1 is the same as sandwich2
console.log(sandwich2 === sandwich3); // sandwich2 is not the same as sandwich3 despite the same contents
console.log(sandwich3 === sandwich1); // sandwich3 is not the same as sandwich1 despite the same contents
