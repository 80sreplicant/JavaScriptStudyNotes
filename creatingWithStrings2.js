// Using backticks with innerHTML allows you to use variables in the ${}
// Downside to this method is that the myHTML variable is not a element. It is just a string.
// It only becomes an element when you dump it into the DOM by setting the innerHTML.
// Example
// const itemImage = document.querySelector(`.wrapper img`);

// itemImage.classList.add(`round`);
// 

const item = document.querySelector(`.item`);

const src = `https://picsum.photos/400`;
const alt = `Baby Yoda Here`;

const myHTML = 
`<div class="wrapper">
<h1>${alt}</h1>
<img src="${src}" alt="${alt}">
</div>`;


// Turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
