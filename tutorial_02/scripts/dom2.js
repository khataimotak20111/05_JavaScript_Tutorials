// Traversing the DOM

var itemList = document.querySelector('#items');

console.log(itemList.parentNode); 

itemList.parentNode.style.backgroundColor = 'purple';

console.log(itemList.parentNode.parentNode);

// parentElement

console.log(itemList.parentElement); 

itemList.parentElement.style.backgroundColor = 'purple';

console.log(itemList.parentElement.parentElement);

// childNodes

console.log(itemList.childNodes);

console.log(itemList.children);

console.log(itemList.children[1]);

itemList.children[1].style.backgroundColor = 'green';

//fistChild
console.log(itemList.firstChild);

console.log(itemList.firstElementChild);

itemList.firstElementChild.textContent = "Hello World";

//lastChild
console.log(itemList.lastChild);

console.log(itemList.lastElementChild);

itemList.lastElementChild.textContent = "Hello World Last";

//Siblings

//nextSibling

console.log(itemList.nextSibling);

console.log(itemList.nextElementSibling);

//previousSibling

console.log(itemList.previousSibling);

console.log(itemList.previousElementSibling);

itemList.previousElementSibling.style.color = 'orange';

// Creating DOM Elements

// createElement

var newDiv = document.createElement('div');

newDiv.className = "hello";

newDiv.id = "hello1";

newDiv.setAttribute('title', 'helloDiv');

var newDivText = document.createTextNode('Maaaaarvel');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '30px';

console.log(newDiv);