// Select the elements on the page, canvas, shake button
const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);
const shakeButton = document.querySelector(`.shake`);
const MOVE_AMOUNT = 20;
// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas.
const {width, height} = canvas;
// Create random X and Y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = `round`; // line shape
ctx.lineCap = `round`; // end point of line shape
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start of the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
// Write a draw function
function draw({ key }) {
  // Increment the hue
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y values depending on what the user did
  switch(key) {
    case `ArrowUp`:
    y -= MOVE_AMOUNT;
    break;
    case `ArrowRight`:
    x += MOVE_AMOUNT;
    break;
    case `ArrowDown`:
    y += MOVE_AMOUNT;
    break;
    case `ArrowLeft`:
    x -= MOVE_AMOUNT;
    break;
    default:
    break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}
// Write a handler for the keys
function handleKey(e) {
  if (e.key.includes(`Arrow`)) {
    e.preventDefault(); //prevent the arrow keys from scrolling the page
    draw({ key: e.key });
  }
};
//  Clear /shake function
function clearCanvas() {
  canvas.classList.add(`shake`);
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(`animationend`, function() {
    canvas.classList.remove(`shake`);
  }, { once: true }
  );
}
// listen for arrow keys
window.addEventListener(`keydown`, handleKey);
shakeButton.addEventListener(`click`, clearCanvas);