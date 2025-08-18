// problem 1:
myMoney = 1000;
applePrice = 400;
orangePrice = 300;
totalPrice = (applePrice + orangePrice);
remainingBalance = (myMoney - totalPrice);
console.log(remainingBalance);

// problem 2:
var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;

var totalSubject = 5;

var totalMarks = (Mathematics + Biology + Chemistry + Physics + Bangla);
var averageMarks = totalMarks / totalSubject;
console.log(parseFloat(averageMarks.toFixed(2)));

// Problem 3:
num1 = 119;
num2 = 5;
remainder = num1 % num2;
console.log(remainder);

// Problem 4:
const a = isNaN('11');
console.log(a);
const b = isNaN(2 - 11);
console.log(b);



// Day 2:
/***
1.
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

var burgerPrice = 600;
if (burgerPrice > 500) {
    console.log("Free Coke");
}

else {
    console.log("Pay 30tk for Coke");
}


/*** 
2.
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


var weight = 70;
var height = 1.6764

const BMI = weight / height ** 2;
console.log(BMI);
if (BMI < 18.5) {
    console.log("You are Underweight.")
}
else if (BMI >= 18.5 && BMI <= 24.99) {
    console.log("You are Normal.")
}
else if (BMI >= 25 && BMI <= 29.99) {
    console.log("You are Overweight.")
}
else {
    console.log("You are Obese.")
}

/***
3
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

var score = 85;
if (score >= 90 && score <= 100) {
    console.log("Grade = A")
}
else if (score >= 80 && score <= 89) {
    console.log("Grade = B")
}
else if (score >= 70 && score <= 79) {
    console.log("Grade = C")
}
else if (score >= 60 && score <= 69) {
    console.log("Grade = D")
}
else {
    console.log("Grade = F")
}


/***
4.
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var myScore = 85;
var friendsScore = 88;

if (myScore >= 80) {
    if (friendsScore >= 80) {
        console.log("Go for lunch.");
    }
    else if (friendsScore >= 60) {
        console.log("Good luck next time.");
    }
    else if (friendsScore >= 40) {
        console.log("Message Unseen.")
    }
    else {
        console.log("Block now.")
    }
}
else {
    console.log("Sleep and Sad.")
}

/***
5.
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

var num1 = 5;
var num2 = 10;
var result;
// if (num1 > num2){
//     result = num1 * 2
// }

// else{
//     result = num1 + num2;
// }

// console.log(result)

(num1 > num2) ? result = num1 * 2 : result = num1 + num2;
console.log(result)

/***
6.
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var ticketFare = 800;
var age = 15;
var student = true;

if (age < 10) {
    console.log("Free for you.");
}
else if (student) {
    ticketFare = ticketFare - ticketFare * 50 / 100;
    console.log(ticketFare);
}
else if (age >= 60) {
    ticketFare = ticketFare - ticketFare * 15 / 100;
    console.log(ticketFare);
}

else{
    console.log(ticketFare);
}

// Swap
let c = 50;
let d = 30;

const temp = c;
c = d;
d = temp;

console.log(c,d);
