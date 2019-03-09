//Math
const num1 = 100;

const num2 = 50;
let val;

console.groupCollapsed('Arithmetic Operations');
console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.groupEnd();


console.groupCollapsed('Math Object');
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(2.345));
console.log(Math.ceil(2.345));
console.log(Math.floor(2.345));
console.log(Math.sqrt(64));
console.log(Math.pow(8,2));
console.log(Math.min(8,2,2,33,6,3,-2));
console.log(Math.max(8,2,2,33,6,3,-2));
console.log(Math.random());
console.log(Math.floor(Math.random() * 20 + 1));
console.groupEnd();



// String
console.groupCollapsed('String Object');
let name = "Johann";
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name[2]);

console.log(name.indexOf('n'));
console.log(name.lastIndexOf('n'));

console.log(name.substring(0,4));
console.log(name.substring(2,4));
console.log(name.substring(7));

//console.log(name.split());
//console.log(name.split(';').join("-"));
//console.log(name.replace('Johann', 'Joey'));
console.log(name.includes('esburg'));
console.groupEnd();

let name1 = "John";
let age = 31;
let city = 'Santa Clara';
let roomRent = 2100;
let coffee = 21;

let html = '<ul><li>'+ name+'</li><li>'+ age+ '</li><li>' + city+'</li>';

function aloha() {
    return "Hi there!!!";
}

html = `<ul>
<li>${name1}</li>
<li>${age}</li>
<li>${city}</li>
<li> Expenses : ${roomRent + coffee}</li>
<li> ${2 + 2}</li>
<li> ${aloha()}</li>
<li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>`;

document.body.innerHTML = html;

//Arrays
console.group('Array Object');
const numbers = [43,56,33,23,44,36,5];
const notAnArray = {};
const numbers2 = new Array(43.56,33,23,44,36,5);
const fruits = ['apple','banana'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:2}, new Date()];

console.log(numbers.length);

console.log(Array.isArray(notAnArray));
//Getting  a single Val
console.log(numbers[2]);
numbers[2]=43;
//Inserting a value in an Array
console.log(numbers[2]);

//Mutating Arrays

//Adding a value to the end
numbers.push(500);

//Remove a value to the end
numbers.pop();


// Queue:
numbers.unshift(120);
// take off from the front
console.log(numbers.shift());

//Finding Index of a value
//console.log(numbers.indexOf(44));

console.log(numbers);

let myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];

myFish.splice(2,2,'Piano', 'MyPiano');
//myFish.splice(2,0,'Piano');
console.log(myFish.reverse().concat(numbers));

function numCompare(val1, val2){
    return val1 < val2;

}
console.log(numbers.sort(numCompare));

let myArr = numbers.map(function (ele, idx, arr) {
    return ele * 5;

});

let filteredArr = numbers.filter(function (ele) {
    return ele % 2 === 0;
});


let myVal = filteredArr.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
}, 1000)
console.log(`My Array : ${myArr}`);
console.log(`Filetered Array : ${filteredArr}`);
console.log(`myVal : ${myVal}`);

console.groupEnd();