function doSomething(){
    document.getElementById("header").innerHTML = '<h2>Hello Again!</h2>';
    console.log(document.getElementById("header").className);
    document.getElementById("header").className="yellow";
}

function refreshSomething() {
   // window.location.assign("https://caniuse.com");
      window.open('https://caniuse.com','_blank');
}

function freeTest() {
    let age=29;
    let anotherage=age-- +2;  //anotherage=30
    age; //28

    let num1=20;
    let num2=--num1 +2;
    let num3=num1+num2;
    num2;  //21
    num3;   //40

    let x="5";  //| "-5"
    let y = Number(x);  //5  | -5
    let z= +x;  //5 |-5

    let k="3";
    -k;  //-3

    "23"<"3"; //true
    "23"<3;  //false
    "a"<3; //false
    "abc">3; //false
    Number("abc"); // NaN
    Number("23"); //23
    "23">3; //true

    "3"==3; //true
    "3"===3; //false

    alert(!""); //true
    alert(!NaN); //true
    alert("5"*5); //25
    alert(5+"5"); //"55"
    alert(true*10); //10
    alert(false*10); //0
    alert("abc"*5); //NaN
    alert(5-"2"); //3

    parseFloat('123px');  //123
    Number('123px');  //NaN
     isFinite("12rfaf"); //false
     isFinite("323"); //true
     isNaN("3"); //false

    alert("5"/5); //1
    alert(5/NaN); //NaN
    alert(""/5); //0
    alert(3/0); //Infinity

    alert(true%25); //1
    alert(3%0); //NaN

    "55" != 55; //false
    "55" !==55; //true
}

function ErrorTest() {
    let found=true;
    let result = (found && somethingelese);
    alert(result);  //Uncaught ReferenceError: somethingelese is not defined at <anonymous>:2:24
}

function ErrorTest2() {
    let found=false;
    let result = (found && somethingelese);
    alert(result);  //false
}

function shortExp() {
    let x = "23" > 3 ? "true": false; //true
}