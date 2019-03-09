//function declaration
//Hoisted
function sum(){

}
let sum = function(){}

let sum =(a,b)=>{return a+b;}; //Fat arrow notation
let sum =(a,b)=> a+b;

//function as arguments


let someFunc= ()=>{alert("Hi there!")};

//callee function...
let callee = (callBackfunc)=>{callBackfunc()};
//Invoking the callee function & passing the callback function..
callee(someFunc);


  let arrDOB=[1990,1965,1934,1937,1982];
let arrayCalculator =(arr, callbackFn)=>{
    let arrRes=[];
    for(let i=0; i<arr.length; i++){
        arrRes.push(callbackFn(arr[i]));
    }
    return arrRes;
};

let calculateAge = (dob)=> 2018 -dob;
let isAdult =(age)=> age>=18;
let ages= arrayCalculator(arrDOB,calculateAge);
let adults =arrayCalculator(ages,isAdult);
console.log(ages);
console.log(adults);


let interviewQuestions =(job)=> {
    if (job === 'designer') {
        return (name) => {
            console.log(`${name}, Can u please explain the principles of UX design`);
        }
    } else if (job === 'teacher') {
        return (name) => {
            console.log(`${name}, what subjects are u comfortable to talk about`);
        }
    } else {
        return (name) => {
            console.log(`${name}, what do u do for a living`);
        }
    }
};
let designerQueations = interviewQuestions('designer');
let teacher = interviewQuestions('teacher');

designerQueations('Emily');
designerQueations('John');
teacher('Andy');

//IIFE
(function () {
    let score= Math.random()*10;
    console.log(score>=5);
})();

let game =(function() {
    let secretNumber =20;
    return{
        getSecretNumber : function(){return secretNumber},
        setSecretNumber : function (num) {secretNumber=num;}
    }
})();
console.log(game.getSecretNumber());

//closure
function retirement(retirementAge) {
    let message = ' year left in retirement.';
    return function(dob){
        let age=2018-dob;
        console.log((retirementAge-age) +message);
    }
}
//define the return functions of the main function
retirementUS = retirement(65);
retirementIceland = retirement(60);
retirementItaly = retirement(55);

retirementUS(1990);
retirementIceland(1982);
retirementItaly(1988);


function generateUniqueIds(){
    let id=0;
    return function (element) {
        if (!element.id) {
            element.id = `generateId-${id++}`;
        }
        return element.id;
    }
}
let elementWithID=document.createElement('p');
elementWithID.id='foo-bar';
let elementWithOutId = document.createElement('p');
//define the return function 'inner', it can take the parameter
let inner = generateUniqueIds();
console.log(inner(elementWithID));
console.log(inner(elementWithOutId));

//Call and apply
let PhysicsTeacher = {
    subject: 'Physics'
};
let ChemistryTeacher = {
    subject: 'Chemistry'
};
function whoAmI(message, message1) {
    console.log(`${message} subject ${this.subject} and ${message1}`)
}
let arr =['message', 'message1'];
whoAmI.call(PhysicsTeacher,'messagePhy','messagePhy2');
whoAmI.apply(ChemistryTeacher,arr);
//equals to 3 steps:ChemistryTeacher.whoAmI=whoAmI; ChemistryTeacher.whoAmI(); delete ChemistryTeacher.whoAmI;


function presentation(style, timeOfDay){
    if(style==='formal'){
        console.log(`God ${timeOfDay} ladies and gentlemen. Im ${this.name} and I work as a ${this.occ}`);
    }else if(style==='casual'){
        console.log(`Hey what's up. Im ${this.name} and I work as a ${this.occ}. Have a nice ${timeOfDay}`);
    }
}
let Emily ={
    name: 'Emily',
    occ: 'UX designer'
};
let John ={
    name: 'John',
    occ: 'Architect'
};
presentation.call(Emily, 'formal', 'Evening');
presentation.apply(John, ['formal', 'Evening']);

let emailCausal = presentation.bind(Emily, 'casual');
emailCausal('morning');

//function constructor
function Person(name, dob, occ) {
    this.name=name;
    this.dob=dob;
    this.occ=occ;
}
person.prototype.whoAmI = function (){
    console.log(`Hi I am ${this.name} and I work as ${this.occ} was born in ${this.dob}`);
}
//any you attach to the prototype of the function, will be added to the instances as well.
let Emily = new Person('Emily','Designer','1982');
let John = new Person('John','1983','Architect');

Emily.whoAmI();
John.whoAmI();