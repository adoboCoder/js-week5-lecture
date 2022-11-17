// declare myString with a value
let myString = "Awesome String!";
console.log(myString);

// showcase mutability by changing the myString value
myString = "An even AWESOMER STRING!";
console.log(myString);

// showcase immutability by trying to change a character inside myString
// reminder: strings are special objects. they behave as an array of characters.
myString[1] = "B"; // try to change the 2nd character in the string, but javascript simply ignores it without any errors or warnings
console.log(myString);

