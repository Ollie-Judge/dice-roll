function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
  document.getElementById("output").innerHTML = `${randomNumber}`;
}
