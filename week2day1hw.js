// Create a function that takes a base number and an exponent number and returns the calculation.
    function calculation (baseNumber,exponentNumber){
        let newNumber = baseNumber**exponentNumber
        return newNumber
    }

    console.log(calculation(4,2))

////
// Create a function that takes an array and a string as arguments and returns the index of the string.
let arr =[1, 2,"strong", 4]

function whereIsIt (arr,randomString) {
    return arr.indexof("strong")
}

console.log(whereIsIt(arr,"strong"))

// the way another student did it 

function indexOFStrnin (arr1,string{
    return.arr
})

/////
// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]
// */


function arrayValuesTypes(arr) {
	let newArray = [];
	for(let i=0; i<arr.length; i++) {
	newArray.push(typeof arr[i]);
	}
	return newArray;
}

// in JS, object is a super-type of functions, 

let arr = [1, 2, 3, "abc", null];

// console.log(arr.0);

console.log([1, "abc", null]);
console.log(arrayValuesTypes([[], 0, 'lol', null]))


// 