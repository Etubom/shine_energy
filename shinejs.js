const previousReading = 11000;
const gasButton = document.querySelector(".gas-button");
// console.log(gasButton);
gasButton.addEventListener("click", function() {
  console.log("you clicked the gas submit button");
});

const electricityButton = document.querySelector(".electricity-button");
electricityButton.addEventListener("click", function() {
  console.log("you clicked the electricity submit button now");
});
