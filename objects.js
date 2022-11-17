let myCar = {
    wheels: 4,
    transmissionStyle: "automatic",
    trunkContents: ["books", "spare tire", "moving blankets"]
};

console.log("My car has " + myCar.wheels + " wheels"); // displays "My car has 4 wheels"
console.log("My car is also " + myCar.transmissionStyle + " transmission style"); // displays "My car is also automatic transmission style"

// iterate through the myCar.trunkContents
console.log("My car has the following items in the trunk:");
for (let i = 0; i < myCar.trunkContents.length; i++) {
    console.log(myCar.trunkContents[i]);
    
}