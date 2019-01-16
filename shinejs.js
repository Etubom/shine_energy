const previousReading = 11000;
const gasButton = document.querySelector(".gas-button");

gasButton.addEventListener("click", function() {
  let gasValue = parseInt(document.querySelector("#gas").value);

  let gasUnitused = gasValue - previousReading;
  let billAmount = 100 * 10 + (gasUnitused - 100) * 20;

  let gasUnitsDisplay = document.querySelector("#gas-unit-display");
  gasUnitsDisplay.innerHTML = `The units of gas used is :${gasUnitused}units`;
  gasUnitsDisplay.style.display = "block";
  let gasDisplay = document.querySelector("#gas-display");
  gasDisplay.innerHTML = `Your gas bill is : £${billAmount / 100}`;

  gasDisplay.style.display = "block";
});

const electricityButton = document.querySelector(".electricity-button");
electricityButton.addEventListener("click", function() {
  let electricityValue = parseInt(document.querySelector("#electricity").value);

  let electricUnitused = electricityValue - previousReading;

  let billAmount = 100 * 10 + (electricUnitused - 100) * 20;

  let electricUnitDisplay = document.querySelector("#electric-unit-display");
  electricUnitDisplay.innerHTML = `The units of electricity used is:${electricUnitused}units`;
  electricUnitDisplay.style.display = "block";
  let electricDisplay = document.querySelector("#electric-display");
  electricDisplay.innerHTML = `Your Electricity bill is £${billAmount / 100}`;
  electricDisplay.style.display = "block";
});
