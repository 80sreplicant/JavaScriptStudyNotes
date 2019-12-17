//  Go get something, listen for something, and then do something.

const butts = document.querySelector(`.butts`);
const coolButton = document.querySelector(`.cool`);

// named function
function handleClick() {
  alert(`YOU CLICKED ME!!!`);
}

butts.addEventListener(`click`, handleClick);
coolButton.addEventListener(`click`, handleClick);

// Arrow function syntax
const hooray = () => console.log(`HOORAY!!`);
// Anonymous callback function
// butts.addEventListener(`click`, function() {
//   alert(`you clicked me`);
// })

// Remove a event listener from a element, must use a named function or an arrow function, it does not work on anon functions.
butts.removeEventListener(`click`, handleClick);

// Listen on multiple items
// forEach method will run a function for each of the items you have selected.
// In this example, we selected all buttons with the class of buy (buyButtons), then used it with a forEach function that sent a alert message for each button clicked.
const buyButtons = document.querySelectorAll(`button.buy`);

// buyButtons.forEach(function(buyButton) {
//   alert(`Binding the buy button`);
//   buyButton.addEventListener(`click`, handleClick);
// });

// Another example using a named function

function handleBuyButtonClick(buyButton) {
  console.log(`Binding the buy button`);
  buyButton.addEventListener(`click`, handleClick);
}

buyButtons.forEach(handleBuyButtonClick);