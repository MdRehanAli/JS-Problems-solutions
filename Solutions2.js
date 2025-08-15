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

