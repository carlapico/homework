/* 
Create a function that takes length and width and finds the perimeter of a rectangle.

Examples
findPerimeter(6, 7) ➞ 26

findPerimeter(20, 10) ➞ 60

findPerimeter(2, 9) ➞ 22
*/

function findPerimeter(length, width) {
	return (length * 2) + (width * 2)
}

console.log(findPerimeter(2,4))


/* 
Write a function that converts hours into seconds.

Examples
howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400
Notes
60 seconds in a minute, 60 minutes in an hour
Don't forget to return your answer.

*/

function howManySeconds(hours) {
	return hours * 60 * 60
}

console.log(howManySeconds(2))