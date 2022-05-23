// slice(start, end)
// substring(start, end)
// substr(start, length)

let str1 = "Apple, Banana, Kiwi";

let part1 = str1.slice(7, 13);
let neg_part = str1.slice(-12, -6);
let single_part1 = str1.slice(7);

console.log(part1);
console.log(neg_part);
console.log(single_part1);

let str2 = "Mango, Orange, Pineapple";

let part2 = str2.substring(7, 13);

console.log(part2);


let str3 = "Passon, Lemon, Cherry";

let part3 = str3.substr(8, 5);//

console.log(part3);


// replace()

let str4 = "Please Visit Microsoft!";
let newText = str4.replace("Microsoft", "ahm-fahim");
console.log(newText);


/* to replace case insensitive, use a regular ecpression with an /i flag(insensitive) */

let newText2 = str4.replace(/MICROSOFT/i, "ahm-fahim");
console.log(newText2);

//Regular expressions are written without quotes.

let text = "Fahim MMM";
let newText3 = text.replace(/MMM/g, "Morshed");
console.log(newText3);

// upper to lower 

let lowText = "Fahim Morhsed";
let upText = lowText.toUpperCase();
console.log(upText);
let upToLow = upText.toLowerCase();
console.log(upToLow);


// concat()

let str5 = "Fahim";
let str6 = "Morshed";

let fullname = str5.concat(" ", str6);
console.log("Full Name :",fullname);

// Note
// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.

//-------------------------

//trim()

let str7 = "    Fahim Morshed!      ";
let str8 = str7.trim();

console.log(str7);
console.log("after trim(): ",str8);


// padStart()

let str9 = "5";
let padded1 = str9.padStart(5, "x");
let padded2 = str9.padStart(4,"0");

console.log(padded1);
console.log(padded2);

// The padStart() & padEnd() method is a string method.

// To pad a number, convert the number to a string first.

let num1 = 9;
let convStr = num1.toString();
let padded3 = convStr.padStart(4,"0");

console.log(padded3);


// padEnd()

let str10 = "5";
let padded4 = str10.padEnd(4, "y");

console.log(padded4);


// charAt()
// The charAt() method returns the character at a specified index

let str11 = "Hello World";
let char = str11.charAt(0);

console.log(char);


// charCodeAt()
// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).


let str12 = "ABCD abcd";
let char2 = str12.charCodeAt(0);

console.log(char2);


// property access
let str13 = "Fahim Morshed";
let access = str13[2];

console.log(access);

// converting string to an array
// a string can be converted to and array with the split() method


let str14 = "a,b,c,d,e";
const my_array = str14.split(",");

console.log(my_array[0]);












