const myParagraph = document.createElement(`p`);
myParagraph.textContent = `I am a P`;
// adding a class of special to the paragraph
myParagraph.classList.add(`special`);

const myImage = document.createElement(`img`);
myImage.src = `https://picsum.photos/500`;
myImage.alt = `Random Image`;

const myDiv = document.createElement(`div`);
myDiv.classList.add(`wrapper`);

// Adding it to the page
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// Add a heading to the top
const heading = document.createElement(`h1`);
heading.textContent = `Cool Things`;
myDiv.insertAdjacentElement(`afterbegin`, heading);

// Added a unordered list inside the div, shortcut method
// const ul = document.createElement(`ul`);
// ul.innerHTML = 
//   `<li>One</li>
//   <li>Two</li>
//   <li>Three</li>
//   <li>Four</li>
//   <li>Five</li>
//   `;
// myDiv.insertAdjacentElement(`afterbegin`, ul);

// Added a unordered list inside the div, long method
const list = document.createElement(`ul`);
const li = document.createElement(`li`);
li.textContent = `three`;
list.appendChild(li);

myDiv.insertAdjacentElement(`beforeend`, list);

const li5 = document.createElement(`li`);
li5.textContent = `five`;
list.append(li5);

// clone node
const li1 = li5.cloneNode(true);
li1.textContent = `one`;
list.insertAdjacentElement(`afterbegin`, li1);

const li4 = document.createElement(`li`);
li4.textContent = `four`;
li5.insertAdjacentElement(`beforebegin`, li4);

const li2 = document.createElement(`li`);
li2.textContent = `two`;
li1.insertAdjacentElement(`beforeend`, li2);