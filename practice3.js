/* 1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array */

const fruits = ['apple', 'banana', 'jackfruits', 'mango', 'guava'];
console.log(fruits[3]);

fruits[1] = 'jambura';
console.log(fruits);


/* 2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output */

const touristSpots = ['Sajek', 'Bandarban', 'Coxs Bazar'];
touristSpots.push('Rangamati');
console.log(touristSpots);

touristSpots.push('Khagrachari', 'Sylhet');
console.log(touristSpots);

touristSpots.pop();
console.log(touristSpots);


/* 3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not. */


const books = ['Bangla', 'English', 'Javascript', 'Python'];
console.log(books.includes('Javascript'));

if(books.includes('Node JS')){
    console.log("Yes, Its here.")
}
else{
    console.log("The book didn't exist.")
}


/* 4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not. */


const a = [1, 2, 3, 4, 5];
const b = 22;
const c = true;
const d = 'Array';

console.log(Array.isArray(a));
if(Array.isArray(b)){
    console.log(b, "is an Array.");
}

else{
    console.log(b, "is not an Array.")
}


/* 5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log(). */


const arr1 = [1, 2, 3];
const arr2 = ['Rahim', 'Karim'];
arr3 = arr1.concat(arr2);

console.log(arr1, arr2, arr3);