function bestTeam(player1, player2) {
    // You have to write your code here
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

// const p1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 };
// const p2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 };
// console.log(bestTeam(p1, p2));

// const p1 = { name: "Germany", foul: 12, cardY: 0, cardR: 0 };
// const p2 = { name: "Sweden", foul: 7, cardY: 4, cardR: 1 };
// console.log(bestTeam(p1, p2));

const p1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
const p2 = { name: "France", foul: 10, cardY: 2, cardR: 1 };
console.log(bestTeam(p1, p2));

// const p1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
// const p2 = "France";
// console.log(bestTeam(p1, p2));