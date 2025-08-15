function resultReport(marks) {
    // You have to write your code here
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let total = 0;
    let pass = 0;
    let fail = 0;
    for (const mark of marks) {
        total += mark;
        if (mark >= 40) {
            pass++;
        }
        else {
            fail++;
        }
    }

    const totalSubjects = marks.length;
    const average = Math.round(total / totalSubjects);
    if (totalSubjects === 0) {
        return {
            finalScore: 0,
            pass: 0,
            fail: 0
        };
    }

    return {
        finalScore: average,
        pass: pass,
        fail: fail
    };
}

// const allMarks = [];
// console.log(resultReport(allMarks));

const allMarks = [98, 87, 67, 91, 92, 33, 87];
console.log(resultReport(allMarks));

// const allMarks = [99, 87, 67, 12 ,87];
// console.log(resultReport(allMarks));

// const allMarks = [99];
// console.log(resultReport(allMarks));

// const allMarks = 100;
// console.log(resultReport(allMarks));

