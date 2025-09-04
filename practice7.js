/* Task-1:
Write a function to convert temperature from Celsius to Fahrenheit. */

function celsisuToFahrenheit(celcius) {
    const Fahrenheit = (celcius / 5) * 9 + 32;
    return Fahrenheit;
}
const celsius = 100;
const Far = celsisuToFahrenheit(celsius);
console.log(celsius, 'Celsius =', Far, "Fahrenheit")




/* Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0 */

function repeated(number, find) {
    count = 0;
    for (const num of number) {
        if (num === find) {
            count++;
        }
    }
    return count;
}

const number = [5, 10, 25, 25, 25, 15, 20];
const repeatedNumber = repeated(number, 25);
console.log(repeatedNumber)




/* Task-3:
Write a function to count the number of vowels in a string. */

function vowelsCount(str) {
    let count = 0;
    for (const vowel of str) {
        if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' || vowel === 'A' || vowel === 'E' || vowel === 'I' || vowel === 'O' || vowel === 'U') {
            count++;
        }
    }
    return count;
}

const str = "I am Baker Vai";
const vowels = vowelsCount(str);
console.log("Total vowels in", str, "is = ", vowels);


/* Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming */


function longestWord(string) {
    words = string.split(' ');
    let longest = '';
    for (word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

const string = "I am learning Programming to become a programmer";
const longest = longestWord(string);
console.log("Longest word is:", longest);



/* Task-5:
Generate a random number between 10 to 20. */

function randomNumber(num1, num2) {
    return Math.floor(Math.random()*(num2 - num1 +1))+10;
}

const a = 10;
const b= 20;
const random = randomNumber(a, b);
console.log(random);