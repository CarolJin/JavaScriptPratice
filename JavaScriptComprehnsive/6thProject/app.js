//DOM

//Selecting single Elements

// document.getElementById();
//let ele = document.querySelector('ul li');
//let ele = document.querySelector('li:last-child');
/*
let ele = document.querySelector('li:nth-child(even)');
ele.style.background = 'aqua';
console.log(ele);*/


// Selecting multiple elements:
/*
let myList = document.querySelector('ul');
let elems = myList.getElementsByClassName('collection-item');
console.log(elems);
console.log(elems[0]);
elems[0].style.color = 'red';
elems[0].textContent = 'red';*/

/*let elems = document.getElementsByTagName('li');
let elemsArr = Array.from(elems);
elemsArr.forEach(ele => ele.style.color = 'red' );
console.log(elems);*/

//
/*
let oddElems = document.querySelectorAll('li:nth-child(odd)');
let eventElems = document.querySelectorAll('li:nth-child(even)');
let oddElemsArr = Array.from(oddElems);
let evenElemsArr = Array.from(eventElems);
oddElemsArr.forEach(ele => ele.style.background = 'grey');
evenElemsArr.forEach(ele => ele.style.background = `aqua`);
console.log(elems);*/

//creating element
let addTask =(message)=>
{
    let newLi = document.createElement('li');
    newLi.className = 'collection-item';
    newLi.id = 'new-item';
    newLi.setAttribute('title', 'New Item 1');
    newLi.appendChild(document.createTextNode(message));
    let anc = document.createElement('a');
    anc.className = 'delete-item secondary-content';
    anc.innerHTML = '<i class="fa fa-remove"></i>';
    newLi.appendChild(anc);
    document.querySelector('ul.collection').appendChild(newLi);
};

//Remove an element
const newHeading = document.createElement('h2');
newHeading.appendChild(document.createTextNode('Task List - Another'));
const prevHeading = document.querySelector('.card-title');
const parentContainer = document.querySelector('.card-content');
parentContainer.replaceChild(newHeading,prevHeading);
//remove element 2
let replaceElements=()=> {
    const ulList = document.querySelectorAll('ul');
    const liList = document.querySelectorAll('li');
 //   liList[0].remove();
    //  ulList.removeChild(ulList[2]);
// remove the li
    ulList.removeChild(liList[liList.length - 1]);
};

//Classes and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
//link.classList.remove('test');

/*let myHref = link.getAttribute('href');
console.log(myHref);
link.setAttribute('href', 'http://google.com'); */

//Event Listener
document.getElementById('removeBtn').addEventListener('click',(eve)=>{
    console.log(eve.target);
    console.log(eve.target.id);
    console.log(eve.target.className);
    console.log(eve.target.classList);

    //Event type
    console.log(eve.type);

    console.log(new Date(eve.timestamp));
    console.log(eve.clientY);
    console.log(eve.clientX);
    console.log(eve.target.offsetX);
    console.log(eve.target.offsetY);
});

//localStorage
