// item 1
// created a function min() that accepts two parameters: num1 & num2
function min(num1, num2) {
    // check if num1 is less than num2
    if(num1 < num2){
        return num1;
    } 
    // otherwise return num2
    else {
        return num2;
    }
}

// call the function min(), then display the result in the console
console.log(min(20, 10));

// item 2
// created a function calculateCircumference that accepts one parameter: radius
function calculateCircumference(radius){
    // return the result
    return 2 * Math.PI * radius;
}

// call the function calculateCircumference, then display the result in the console
console.log(calculateCircumference(5));

// item 3
// created a function searchString() that accepts two parameters: characterInput & stringInput
function searchString(characterInput, stringInput) {
    // declare a variable to store how many matches we found
    let counter = 0;
    
    // for loop statement that checks letter by letter in stringInput
    for(let i = 0; i < stringInput.length; i++){

        // increase the counter by 1 if the current letter being checked in stringInput is a match
        if (stringInput[i] == characterInput) {
            counter++;
        }
    }

    // return the counter
    return counter;
}

// call the function searchString, then display the result in the console
console.log(searchString("s", "mississippi"));