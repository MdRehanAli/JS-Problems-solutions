
/* _______________________________
Object Task
_______________________________ */



// Task-1
// Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors["golden rod"]);


/* Task-2
For this object below add a property named passenger capacity with value 5 */

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car.passenger = 5;
// or 
car["version"] = "v4";
console.log(car);


/* Task-3
Display the physics marks as output. */

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks);



/* Task-4
Count the number of properties. */

let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

console.log(Object.keys(student2).length);




/* Task-5 (Hard)
Loop through an object and print the key-value pairs with their types */

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

for (object in myObject) {
    console.log('key:', object, '|', 'type:', typeof (myObject[object]));
}



/* _______________________________
String Task
_______________________________ */


// Task-1:
// Count how many times a string has the letter a

const str1 = 'oh no!';
let count = 0;
for (let i = 0; i <= str1.length; i++) {
    if (str1[i] === 'o') {
        count++;
    }
}
console.log(count);


// Task-2:
// Count how many times a string has the letter a or A

const str2 = 'abcAabca';
let count1 = 0;
for (let i = 0; i <= str2.length; i++) {
    if (str2[i] === 'a' || str2[i] === 'A') {
        count1++;
    }
}
console.log(count1);



/* Task-3:
Check whether a string contains all the vowels a, e, i, o, u */

let str3 = 'aeioub';
str3 = str3.toLocaleLowerCase();

let vowels = ['a', 'e', 'i', 'o', 'u'];
let allPresent = true;

for (let v of vowels) {
    if (!str3.includes(v)) {
        allPresent = false;
        break;
    }
}

if (allPresent) {
    console.log("The string contains all vowels (a, e, i, o, u).");
}
else {
    console.log("The string does NOT contain all vowels.");
}


/* Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y. */

const str4 = 'xXyY';
let result = "";

for (let i = 0; i < str4.length; i++) {
    if (str4[i] === 'x') {
        result += 'y';
    }
    else if (str4[i] === 'X') {
        result += "Y";
    }
    else {
        result += str4[i];
    }
}
console.log(result);



// Task-5:
// Capitalize Every first Letter of each word in a String

const str5 = "my name is baker vai";
let words = str5.split(" ");
console.log(words);

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toLocaleUpperCase() + words[i].slice(1);
}

let result2 = words.join(" ");
console.log(result2);   