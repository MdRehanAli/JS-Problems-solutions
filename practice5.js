// Reverse an array
const nums = [1, 5, 7, 8, 9, 11];

const reversed = [];
for (let i = 0; i < nums.length; i++) {
    reversed.unshift(nums[i]);
}

console.log(reversed);


// Reverse an array Using for of
const reverse = [];
for (const num of nums) {
    reverse.unshift(num)
}
console.log(reverse);



// JS Array Looping

/* Task 1
Write a JavaScript code to reverse the array colors without using the reverse method. */

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let rev = [];

for (const color of colors) {
    console.log(color);
    rev.unshift(color);
}
console.log(rev);



/* Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique. */

const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNum = [];

for (const nums of numbers) {
    if (nums % 2 == 0) {
        evenNum.push(nums);
    }
}
console.log(evenNum);



/* Task 3
Use a for...of loop to concatenate all the elements of an array into a single string. */

const numbers2 = ['Tom', 'Tim', 'Tin', 'Tik'];
let concatNums = '';

for (const nums2 of numbers2) {
    concatNums = concatNums.concat(nums2);
}
console.log(concatNums);



/* Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output */

const statement = 'I am a hard working person';
const newStatement = statement.split(' ');
console.log(newStatement);

let finalStatement = [];
for (const newstate of newStatement) {
    finalStatement.unshift(newstate);
}
finalStatement = finalStatement.join(' ');
console.log(finalStatement);



/* Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99. */

const num3 = [1, 2, 3];
// let num4 = num3.slice();

// or 
let num4 = [...num3];

num4[0] = 99;

console.log(num3, num4);



/* Task 6
Given an array of student objects, print each student’s name and marks. */

const students = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
];

for (const student of students) {
    console.log('Name:', student.name, ', Marks:', student.marks)
}




/* Task 7
Given a 2D array, update the value at second row first item to 99 and print the updated array. */


const array2D = [
    [1, 2],
    [3, 4],
    [5, 6]
];

array2D[1][0] = 99;
console.log(array2D);