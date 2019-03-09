console.log("Hello World!");
console.warn("Hello world with a warning!");
console.error("Hello world error");
console.clear();
console.time("Hello");
console.groupCollapsed("My Group 11");
console.log("Hello World!");
console.log("Hello World!");
console.groupEnd();
console.group("my group 1");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.groupEnd();
console.timeEnd("Hello");
console.dir(window.navigator);

function myNewFunc() {
    if (true) {
        var x = 5;
    }
    console.log(x);
}

let val =6;
const addresses = {
    address1: "Morgan Hill",
    address2: "Salinas"
};
let address1 = {
    address1: "Morgan Hill",
    address2: "Salinas"
};
const anotherAddress = address1;

let change = function(valToBeChanged) {
    if(typeof valToBeChanged === 'number'){
        valToBeChanged =16;
    }else{
        valToBeChanged.address3= "San Jose";
    }
}
change(val);
console.log(val);

change(addresses);
console.dir(address1);

console.log(anotherAddress===addresses);

const num1=100;
const num2=15;
console.groupCollapsed("Arithmetic operation: ");
console.log(num1+num2);
console.log(num1*num2);
console.log(num1-num2);
console.log(num1%num2);
console.groupEnd();
console.groupCollapsed("Math operation: ");
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(2.345));
console.log(Math.ceil(2.345));
console.log(Math.floor(2.345));
console.log(Math.pow(4,2));
console.log(Math.random()*20+1);
console.log(Math.sqrt(64));
console.groupEnd();

let name="JohnHumnw";
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name[2]);
console.log(name.indexOf("n"));
console.log(name.lastIndexOf("n"));
console.log(name.substr(2,4));
console.log(name.split('').join(";"));
console.log(name.replace("John","Emma"));
