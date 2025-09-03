// Function 


/* Task-1
Take four parameters. Multiply the four numbers and then return the result */

function multiply(a, b, c, d) {
    const result = a * b * c * d;
    return result;
}
const result = multiply(2, 3, 4, 5);
console.log(result);



/* Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result. */
function newResult(num1) {
    if (num1 % 2 == 1) {
        num1 *= 2;
    }
    else {
        num1 /= 2;
    }
    return num1
}

console.log(newResult(8));



/* Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */
const arr = [2, 3, 4];
function make_avg(arr) {
    let total = 0;
    for (const num of arr) {
        total += num;
    }
    const average = total / arr.length;
    return average;
}

const average = make_avg(arr);
console.log(average);



/* Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. */

function count_zero(str) {
    let count = 0
    for (const s of str) {
        if (s === '0') {
            count++;
        }
    }
    return count;
}

const str = '1001010'
console.log(count_zero(str));


/* Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd */

function odd_even(num5){

    if(num5 === 0){
        return "Neutral";
    }
    else if(num5 %2 == 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}

const numb = odd_even(5);
console.log(numb);