//Template literals use back-ticks(``) rather than the quotes ("")to dinfine a string

let str = `Fahim Morshed`;
console.log(str);

let str1 = `You don't 
know who I'm!
call me "BOSS"`;
console.log(str1);


let firstName = "Fahim";
let lastName = "Morshed";

let fullName = `Welcome ${firstName} ${lastName}!`;
console.log(fullName);

let price = 10;
let VAT = 0.25;

let total = `Total: ${price * (1 + VAT).toFixed(2)}`;
console.log(total);

//----------------------------------
// html templates

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;

