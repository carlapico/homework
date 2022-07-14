// Homework will help you practice arrays, objects, and functions.
// Create a folder inside the code folder called homework.
// Inside of the homework folder, create a file named day-three.js and do these:


// 1. Write a function that adds two numbers together.

function numSum(x,y) {
    return x + y
}

let randomSum = numSum(3, 4)
console.log(randomSum)


// 2. Write a car object that has a modal and color.  Create a property called year then console.log all of the objects properties individually.

let car = {
    model: "bronco",
    color: "white"
}

console.log(car)

car.year = 2022
console.log(car)

console.log(car.model)

console.log(car.color)

console.log(car.year)


// 3. Write a function to get the first element in an array.

function firstElement (array) {
    console.log(array[0])
}

function firstElement (arr) {
    console.log(arr[0])
}
let arrayOfFaveStuff =['cats','coffee','Disney']
firstElement (arrayOfFaveStuff)
