/*
JavaScript Arithmetic Operators
Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator	Description
    +	Addition
    -	Subtraction
    *	Multiplication
    **	Exponentiation (ES2016)
    /	Division
    %	Modulus (Remainder)
    ++	Increment
    --	Decrement
*/
let a = 10 + 3;
let x = (100 + 39) * a;
console.log(x);

let num = 5; // increment 
num++;
console.log(num);

let num1 = 5;
console.log(num1 ** 2);

let num3 = 4;
let num4 = 4;

console.log(Math.pow(num3, num4));

/* Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-). */
