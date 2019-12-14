// Create div and add class of wrapper, then add it to the body
const div = document.createElement(`div`);
div.classList.add(`wrapper`);
document.body.appendChild(div);

// adding text to the div
div.innerHTML = (`
  <h1>This is all practice</h1>
<p>Hello There Dude</p>`);
// add a image to the div
const img = document.createElement(`img`);
img.src = `https://picsum.photos/600`;
img.classList.add(`random`);
img.alt = `random image`;
div.appendChild(img);

// const ul = `<ul>
// <li>Study Javascript</li>
// <li>Get something to eat</li>
// <li>Study some more</li>
// </ul>
// `;
// div.innerHTML = ul;

// const ulElement = document.querySelector(`ul`);
// ulElement.insertAdjacentElement(`beforebegin`, img);

// create an element, added text inside the h1, appended the element.
const snuck = document.createElement(`h1`);
snuck.innerText = `Snuck into that guys ass`;
document.body.appendChild(snuck);

const pizza = document.querySelector(`.pizza`);
// pizza.textContent = `${pizza.textContent} Yes this is pizza`;
pizza.insertAdjacentText(`beforeend`, pizza);

// selecting a image with the class random, used classList.add method to add a class of open, created a function to toggle the image of a class of round. Used a eventListener to use the function I created to toggle the image.
const pic = document.querySelector(`.random`);
pic.classList.add(`open`);

function toggleRound() {
  pic.classList.toggle(`round`);
};
pic.addEventListener(`click`, toggleRound);

pic.alt = `more random`;
pic.width = 450;
pic.height = 200;
console.log(pic);