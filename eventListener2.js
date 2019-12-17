const buyButtons = document.querySelectorAll(`button.buy`);

function handleBuyButtonClick(event) {
  const button = event.target;
  // console.log(button.textContent);
  // console.log(`You are buying it`);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Stop this even from bubbling up
  event.stopPropagation();
}


buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener(`click`, handleBuyButtonClick);
})

window.addEventListener(`click`, function(event) {
  console.log(`You Clicked the Window`);
  console.log(event.target);
})

const photoEl = document.querySelector(`.photo`);

photoEl.addEventListener(`mouseenter`, function(e) {
  console.log(e.currentTarget);
  console.log(this);
});