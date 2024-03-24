function randomRoll() {
  return Math.floor(Math.random() * 6) +1;
}

function diceGameSimulation(num) {
  const result = [];

  for (let i = 0; i < num; i++) {
    const dice1 = randomRoll();
    const dice2 = randomRoll();
    const sum = dice1 + dice2;
    let outcome = "";

    if (sum === 7 || sum === 11) {
      outcome = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      outcome = "lose";
    } else {
      outcome = "roll again";
    }
     result.push({ dice1, dice2, sum, outcome });
  }
  return result;
}

module.exports = diceGameSimulation;
