let total = 0;
let allRolls = [];

const howManyDiceInput = document.querySelector("#howManyDice");
const numSidesInput = document.querySelector("#numSides");
const totalOutput = document.querySelector("#total");
const allRollsOutput = document.querySelector("#allRolls");

function rollDice() {
  const numDice = parseInt(howManyDiceInput.value);
  if (isNaN(numDice) || numDice <= 0) {
    alert("Please enter a valid number of dice");
    howManyDiceInput.value = "";
    howManyDiceInput.focus();
  }

  const numSides = parseInt(numSidesInput.value);
  if (isNaN(numSides) || numSides <= 0) {
    alert("Default sides is 6.  Enter alternate number if you want something different.");
    numSidesInput.value = "6";
    numSidesInput.focus();
  }

  total = 0;
  allRolls = [];
  allRollsOutput.innerHTML = "";

  for (let diceIndex = 0; diceIndex < numDice; diceIndex++) {
    const roll = Math.floor(Math.random() * numSides) + 1;
    total += roll;
    allRolls.push(roll);
  }

  totalOutput.innerHTML = "Total: " + total;
}

function showAllRolls() {
  const list = allRollsOutput;
  list.innerHTML = "";

  for (let rolledDie = 0; rolledDie < allRolls.length; rolledDie++) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`Die ${rolledDie + 1}: ${allRolls[rolledDie]}`));
    list.appendChild(li);
  }
}

function resetRolls() {
  howManyDiceInput.value = "";
  numSidesInput.value = "6";
  totalOutput.innerHTML = "Total:";
  allRollsOutput.innerHTML = "";
  total = 0;
  allRolls = [];
}
