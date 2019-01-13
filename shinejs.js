const previousReading = 11000;
const gasButton = document.querySelector(".gas-button");
// console.log(gasButton);
gasButton.addEventListener("click", function() {
  // console.log("you clicked the gas submit button");
  let gasValue = parseInt(document.querySelector("#gas").value);
  console.log(typeof gasValue);
  let gasUnitused = gasValue - previousReading;
  let billAmount = 100 * 10 + (gasUnitused - 100) * 20;
  console.log("Gas bill amount is:", billAmount);
  let gasUnitsDisplay = document.querySelector("#gas-unit-display");
  gasUnitsDisplay.innerHTML = `The units of gas used is :${gasUnitused}units`;
  gasUnitsDisplay.style.display = "block";
  let gasDisplay = document.querySelector("#gas-display");
  gasDisplay.innerHTML = `Your gas bill is : £${billAmount}`;
  console.log("Gas display here:", gasDisplay);
  gasDisplay.style.display = "block";
});

const electricityButton = document.querySelector(".electricity-button");
electricityButton.addEventListener("click", function() {
  let electricityValue = parseInt(document.querySelector("#electricity").value);
  console.log("Electricity Value", electricityValue);
  let electricUnitused = electricityValue - previousReading;
  console.log("Electricity used :", electricUnitused);
  let billAmount = 100 * 10 + (electricUnitused - 100) * 20;
  console.log("Electric bill amount is:", billAmount);
});
