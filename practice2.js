/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

let message = 1;
while (message <= 60) {
    console.log(message, "I will invest at least 6 hrs every single day for next 60 days!");
    message++;
}

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let num1 = 61;
while (num1 <= 100) {
    if (num1 % 2 != 0) {
        console.log(num1);
    }
    num1++;
}

let num2 = 78;
while (num2 <= 98) {
    if (num2 % 2 == 0) {
        console.log(num2);
    }
    num2++;
}


/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let num3 = 81;
let sum = 0;
while (num3 <= 131) {
    if (num3 % 2 != 0) {
        sum += num3;
    }
    num3++;
}
console.log(sum);

let num4 = 206;
let sum2 = 0;

while (num4 <= 311) {
    if (num4 % 2 == 0) {
        sum2 += num4;
    }
    num4++;
}
console.log(sum2);


/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */


let n = 5;
let i = 1;

while (i <= 10) {
    console.log(`${n} x ${i} = ${n * i}`);
    i++;
}



/***

Implement a countdown timer that counts down from 21 to 15.

 */

let num5 = 21;
while (num5 >= 15) {
    console.log(num5);
    num5--;
}


/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

for (let i = 1; i <= 40; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(i);
}


/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let i = 55; i <= 85; i++) {
    if (i % 2 != 0) {
        if (i % 5 == 0) {
            continue;
        }
        console.log(i);
    }
}


/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/


for (let i = 1; i <= 200; i++) {
    console.log(i);
    if (i == 100) {
        break;
    }
}


/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum3 = 0;
for (let i = 1; ; i++) {
    sum3 += i;
    if (sum3 >= 100) {
        break;
    }
    console.log(sum3);
}


/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i < 100; i++) {
    if (i ** i <= 100) {
        console.log("First Square root is: ", i * i);
        break;
    }
}
