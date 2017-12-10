// -------- Examine the Document Object --------- //

console.dir(document);
console.log(document.domain);
console.log(document.url);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent = "Hello";
console.log(document.forms[0]);
console.log(document.links);

console.log(document.images);

// getElementById

console.log(document.getElementById('header-title'));

var headerTitle = document.getElementById('header-title');

var header = document.getElementById('main-header');

console.log(headerTitle);

headerTitle.textContent = "Hello";

headerTitle.innerText = "LALALALLALA";

headerTitle.innerHTML = "<h3>Tamoor</h3>"

header.style.borderBottom = "3px solid #000000";

// getElemsntsByClassName

var items = document.getElementsByClassName("list-group-item");
console.log(items);

console.log(items[2]);

items[1].textContent = "Jurrasic Park";
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'Silver';

for (var i = 0; i < items.length; i++){
	items[i].style.backgroundColor = 'Silver';
}

// getElementsByTagName

var li = document.getElementsByTagName('li');
console.log(li);

console.log(li[2]);

li[1].textContent = "Jurrasic Park";
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'Silver';

for (var i = 0; i < li.length; i++){
	li[i].style.backgroundColor = 'red';
}

// QuerySelector

var header = document.querySelector('#main-header');
header.style.borderBottom = "10px dotted green";

var input = document.querySelector('input');
input.value = "Marvel";

var submit = document.querySelector('input[type="submit"]');
submit.value = "Send";

var item = document.querySelector('.list-group-item');
item.style.color = 'yellow';

var lastitem = document.querySelector('.list-group-item:last-child');

lastitem.style.color = 'blue';

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color = 'pink';

// QuerySelectorAll

var titles = document.querySelectorAll('.title');

console.log(titles);

titles[0].textContent = "Inbox Marketer";

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++) {
	odd[i].style.backgroundColor = 'orange';
}

for (var i = 0; i < odd.length; i++) {
	even[i].style.backgroundColor = 'purple';
}