let total = 0;
let allRolls = [];

function rollDice() {
  const numDice = parseInt(document.getElementById("howManyDice").value);
  if (isNaN(numDice) || numDice <= 0) {
    alert("Please enter a valid number of dice");
    document.getElementById("howManyDice").value = "";
    document.getElementById("howManyDice").focus();
    return;
  }

  const numSides = parseInt(document.getElementById("numSides").value);
  if (isNaN(numSides) || numSides <= 0) {
    alert("Please enter a valid number of sides");
    document.getElementById("numSides").value = "6";
    document.getElementById("numSides").focus();
    return;
  }

  total = 0;
  allRolls = [];
  document.getElementById("allRolls").innerHTML = "";

  for (let diceIndex = 0; diceIndex < numDice; diceIndex++) {
    const roll = Math.floor(Math.random() * numSides) + 1;
    total += roll;
    allRolls.push(roll);
  }

  document.getElementById("total").innerHTML = "Total: " + total;
}

function showAllRolls() {
  const list = document.getElementById("allRolls");
  list.innerHTML = "";

  for (let rolledDie = 0; rolledDie < allRolls.length; rolledDie++) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`Die ${rolledDie + 1}: ${allRolls[rolledDie]}`));
    list.appendChild(li);
  }
}

function resetRolls() {
  document.getElementById("howManyDice").value = "";
  document.getElementById("numSides").value = "6";
  document.getElementById("total").innerHTML = "Total:";
  document.getElementById("allRolls").innerHTML = "";
  total = 0;
  allRolls = [];
}
