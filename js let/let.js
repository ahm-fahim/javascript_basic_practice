/*
The let keyword was introduced in ES6 (2015).

Variables defined with let cannot be Redeclared.

Variables defined with let must be Declared before use.

Variables defined with let have Block Scope.
*/

var x = 3; // Allowed 
let x = 5; // Not allowed

{
    let x = 4; // Allowed 
    let x = 5; // Not allowed 
}

{
    let x = 2; // Allowed 
    var x = 4; // Not allowd 
}

//----============

let x = 2;    // Allowed

{
let x = 3;    // Allowed
}

{
let x = 4;    // Allowed
}


// -------=====

carName = "Volvo";
var carName;

console.log(carName);