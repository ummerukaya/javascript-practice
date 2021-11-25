"use strict";

var oopsGlobal;

//name function
function fun1(first,mid,last){
    let name=`${first} ${mid} ${last}`;
    console.log(name);
    oopsGlobal=5;
    return oopsGlobal;
}

console.log(fun1('Umme','Rukaya','Suny'));

//anonymous function
var add=function(a,b){return a+b;};
console.log(add(20,3));

setTimeout(function(){alert("this msg will be shown after 5 sec");},5000);

//constructors
var cons = new Function("a","b","console.log('This is the body');return a+b;");
console.log(cons(50,2));

//self-invoking function
(function(a,b) {
    console.log(`This is a self-invoking function ${a + b}`);
})(2,3);

//arrow function
var hello=()=>{return 'hello';}
console.log(hello());

//debugger;

//Html Event
function displayDate() {
    document.getElementById('b1').innerHTML=Date();
} 
let text="The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/g)); //shows exact matches
console.log(text.match(/ain/gi)); //shows all including case-sensitive value

//object
const person = {
   Name: 'Umme Rukaya',
   ID: 23,
   Work: function(){
       return this.Name+" kichu kore na.";
   }
};
console.log(person.Work());

//callback function
function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);