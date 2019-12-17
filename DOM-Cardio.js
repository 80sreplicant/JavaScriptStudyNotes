// Make a div
const div = document.createElement(`div`);
// add a class of wrapper to it
div.classList.add(`wrapper`);
// put it into the body
document.body.append(div);
// make an unordered list
const ul = `
<ul>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ul>
`;
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.innerHTML = ul;
// create an image
const img = document.createElement(`img`);
// set the source to an image
img.src = `https://picsum.photos/500`
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add(`cute`);
// add an alt of Cute Puppy
img.alt = `Cute Puppy`;
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it

const myDiv = `
<div class="myDiv1">
  <p>One here</p>
  <p>Another here</p>
</div>`;

// put this div before the unordered list from above
const ulElement = div.querySelector(`ul`);
ulElement.insertAdjacentHTML(`beforebegin`, myDiv);

const myDiv2  = div.querySelector(`.myDiv1`);
// add a class to the second paragraph called warning
myDiv2.children[1].classList.add(`warning`);
console.log(myDiv2);
// remove the first paragraph
myDiv2.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} - ${age}</h2>
      <p>Their ${height} is ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
      <button class="delete" type="button">&times; Delete</button>
      </div>`
      return html;
};

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement(`div`);
cards.classList.add(`cards`);
// Have that function make 4 cards
let cardsHTML = generatePlayerCard(`jose`, 13, 150);
cardsHTML = cardsHTML + generatePlayerCard(`Molly`, 10, 5);
cardsHTML = cardsHTML + generatePlayerCard(`Lauren`, 17, 7);
cardsHTML = cardsHTML + generatePlayerCard(`Aris`, 20, 11);

cards.innerHTML = cardsHTML;
div.insertAdjacentElement(`beforebegin`, cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll(`.delete`);
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.closest(`.playerCard`).remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener(`click`, deleteCard));