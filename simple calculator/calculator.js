"use strict";
let sign, firstNumber, secondNumber, answer = "", x = "";

function result() {
    secondNumber = parseFloat(x);
    x = "";
    if (sign == 0) {
        answer = firstNumber + secondNumber;
    }
    else if (sign == 1) {
        answer = firstNumber - secondNumber;
    }
    else if (sign == 2) {
        answer = firstNumber * secondNumber;
    }
    else if (sign == 3) {
        
        if (secondNumber == 0)
            answer = 'infinity';
        else
            answer = firstNumber / secondNumber;
    }
    else
    {
        answer="";
    }
    document.getElementById('display').innerHTML = answer;
}

function takeDecimal() {
    x += document.getElementById('.').value;
    document.getElementById('display').innerHTML = x;
}
function takeZero() {
    x += document.getElementById('0').value;
    document.getElementById('display').innerHTML = x;
}

function takeOne() {
    x += document.getElementById('1').value;
    document.getElementById('display').innerHTML = x;
}
function takeTwo() {
    x += document.getElementById('2').value;
    document.getElementById('display').innerHTML = x;
}

function takeThree() {
    x += document.getElementById('3').value;
    document.getElementById('display').innerHTML = x;
}
function takeFour() {
    x += document.getElementById('4').value;
    document.getElementById('display').innerHTML = x;
}

function takeFive() {
    x += document.getElementById('5').value;
    document.getElementById('display').innerHTML = x;
}

function takeSix() {
    x += document.getElementById('6').value;
    document.getElementById('display').innerHTML = x;
}

function takeSeven() {
    x += document.getElementById('7').value;
    document.getElementById('display').innerHTML = x;
}
function takeEight() {
    x += document.getElementById('8').value;
    document.getElementById('display').innerHTML = x;
}

function takeNine() {
    x += document.getElementById('9').value;
    document.getElementById('display').innerHTML = x;
}

function addition() {
    firstNumber = parseFloat(x);
    sign = 0;
    x = "";
    document.getElementById('display').innerHTML = x;
}
function subtraction() {
    firstNumber = parseFloat(x);
    sign = 1;
    x = "";
    document.getElementById('display').innerHTML = x;
}
function multiplication() {
    firstNumber = parseFloat(x);
    sign = 2;
    x = "";
    document.getElementById('display').innerHTML = x;
}
function division() {
    firstNumber = parseFloat(x);
    sign = 3;
    x = "";
    document.getElementById('display').innerHTML = x;
}