let total = 0;
let allRolls = [];

function rollDice() {
  const numDice = parseInt(document.querySelector("#howManyDice").value);
  if (isNaN(numDice) || numDice <= 0) {
    alert("Please enter a valid number of dice");
    document.querySelector("#howManyDice").value = "";
    document.querySelector("#howManyDice").focus();
    return;
  }

  const numSides = parseInt(document.querySelector("#numSides").value);
  if (isNaN(numSides) || numSides <= 0) {
    alert("Please enter a valid number of sides");
    document.querySelector("#numSides").value = "6";
    document.querySelector("#numSides").focus();
    return;
  }

  total = 0;
  allRolls = [];
  document.querySelector("#allRolls").innerHTML = "";

  for (let diceIndex = 0; diceIndex < numDice; diceIndex++) {
    const roll = Math.floor(Math.random() * numSides) + 1;
    total += roll;
    allRolls.push(roll);
  }

  document.querySelector("#total").innerHTML = "Total: " + total;
}

function showAllRolls() {
  const list = document.querySelector("#allRolls");
  list.innerHTML = "";

  for (let rolledDie = 0; rolledDie < allRolls.length; rolledDie++) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`Die ${rolledDie + 1}: ${allRolls[rolledDie]}`));
    list.appendChild(li);
  }
}

function resetRolls() {
  document.querySelector("#howManyDice").value = "";
  document.querySelector("#numSides").value = "6";
  document.querySelector("#total").innerHTML = "Total:";
  document.querySelector("#allRolls").innerHTML = "";
  total = 0;
  allRolls = [];
}
