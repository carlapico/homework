// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either “A,” “B,” “C,” “D,” or “F.” Call that function for a few different scores and log the result to ensure it works.

function assignGrade (numberScore){
    if (numberScore >= 90){
        return "A"
    } else 
    if (numberScore >= 80 ){
        return "B"
    } else 
    if (numberScore >= 70){
        return "C"
    } else 
    if (numberScore >= 60){
        return "D"
    } else  
    if (numberScore >= 0){
        return "F"
    }
}
console.log(assignGrade(48))

// 2. Create a function that returns the number of true values in an array.
const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

function amountOfTrues(arr) {
  let total = 0 ;
  for (let i =0; i<arr.length;i++){
    if (arr[i]==1){
        total ++;
    }
  }
  return total;
} 
console.log(amountOfTrues(booleanArray))

// // there was another way to do this one with the loop

// 3. Create a function that converts a string to all uppercase letters and console.log the result (hint: string methods):
let str = `WHAT a TIME to BE ALIVE!`
let upperStr= str.toUpperCase()
console.log (upperStr)

// fucntion allCaps (stri){
//     return upperStr =str.toUpperCase()
// }
//     console.log(allCaps)
// // }
// 4. Create a function that takes in a number of two-pointers and three-pointers made and returns a basketball team’s total score?
function totalPoints (twoPoint, threePoint){
    return twoPoint*2 + threePoint*3
}
console.log(totalPoints(2,5))

// Extra for experts:
// 5. Create a function that takes an array of numbers & returns both min and max in that order. (use a loop)
let arrayOfNumbers = [2, 3, 4, 8, 7, 6, 9]

const minMax (arr) {
    let min = 0;
    let max = arr [0];
    for (let i=0; i<array.length; i++){
        if (arr[i] < min){
            max = arr[i]
        }
    }
    return [max,min]
}

console.log(minAndMax(numberArray))