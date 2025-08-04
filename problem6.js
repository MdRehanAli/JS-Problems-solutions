/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var salary = startingSalary;

for (var i = 0; i < experience; i++) {
    increment = salary * 5 / 100;
    salary = salary + increment;
}

console.log(parseFloat(salary.toFixed(2)));