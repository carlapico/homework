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

/* 
Write a function that takes the base and height of a triangle and return its area.

Examples
triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50
Notes
The area of a triangle is: (base * height) / 2
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

function triArea(base, height) {
	return (base * height)/ 2  
}

console.log(triArea(3,2))

/* 
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

Examples
points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100
*/

function points(twoPointers, threePointers) {
	return (twoPointers*2) + (threePointers*3)
}

console.log(points(7,5))

/* 
Mubashir wants to swap two given numbers!

It is not returning the right values. Can you help him fix it?

a = 100
b = 200
a, b = swap(a, b)
print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
Examples
swap(100, 200) ➞ [200, 100]

swap(44, 33) ➞ [33, 44]

swap(21, 12) ➞ [12, 21]
*/

function swap(a, b) {
	return [b, a]
}

console.log(swap(6,2))

/* 
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

Examples
remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0
Notes
The tests only use positive and negative integers.
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

function remainder(x, y) {
	return x%y 
}

console.log(remainder(1,3))

/* 
Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
cubes(3) ➞ 27

cubes(5) ➞ 125

cubes(10) ➞ 1000
Notes
READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
Don't overthink this challenge; it's not supposed to be hard.
*/

function cubes(a) {
	return a ** 3
}

console.log(cubes(3))

// jshero.net for some more help  

