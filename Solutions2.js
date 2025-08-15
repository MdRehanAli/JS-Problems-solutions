function totalFine(fare) {
    if (typeof (fare) !== 'number' || fare <= 0) {
        return "Invalid";
    }
    const serviceCharge = fare * 0.2;
    const extraServiceCharge = 30;
    const totalFare = fare + serviceCharge + extraServiceCharge;
    return totalFare;
}


function onlyCharacter(str) {
    if (typeof (str) !== 'string') {
        return "Invalid";
    }
    const removeSpaces = str.split(" ").join("");
    const upperCase = removeSpaces.toUpperCase();
    return upperCase;
}


function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }

    const player1Score = player1.foul + player1.cardY + player1.cardR;
    const player2Score = player2.foul + player2.cardY + player2.cardR;

    if (player1Score < player2Score) {
        return player1.name;
    }
    else if (player2Score < player1Score) {
        return player2.name;
    }
    else {
        return "Tie";
    }
}


function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}


function resultReport(marks) {
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






// console.log(totalFine(200));

// console.log(onlyCharacter(true))

// const p1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
// const p2 = { name: "France", foul: 10, cardY: 2, cardR: 1 };
// console.log(bestTeam(p1, p2));

// const a1 = [34, 5, 7, 9];
// const a2 = [34, 5, 7];
// console.log(isSame(a1, a2));

// const allMarks = [98, 87, 67, 91, 92, 33, 87];
// console.log(resultReport(allMarks));