var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'blue';
console.log(itemList.parentNode.parentNode.parentNode);

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'yellow';
console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "pink";

console.log(itemList.firstChild);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "green";

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "hello 4";

console.log(itemList.nextElementSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousElementSibling);
console.log(itemList.previousElementSibling);

var newDiv = document.childElement('div');

newDiv.className = 'hello';

newDiv.id ='hello1';

newDiv.setAttributes('title','hello div');

var newDivText = document.createTextNode('hellow world');

newDiv.appendChild(newDivText);
console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv,h1);