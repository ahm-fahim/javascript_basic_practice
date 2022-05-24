/* 
JavaScript Search Methods
String indexOf()
String lastIndexOf()
String startsWith()
String endsWith()
*/


//indexOf()
let str1 = "Please locate where 'locate' occurs!";
console.log(str1.indexOf("locate"));

//lastIndexOf()

console.log(str1.lastIndexOf("locate"));

// if not found it returns -1

console.log(str1.indexOf("Fahim"));
console.log(str1.lastIndexOf("Fahim"));

console.log(str1.indexOf("locate",15));
console.log(str1.lastIndexOf("locate", 15));

// search()
// The search() method searches a string for a specified value and returns the position of the match

console.log(str1.search("locate"));

//match()
//The match() method searches a string for a match against a regular expression and returns  the matches, as an Array object.

console.log(str1.match(/locate/g));

// Perform a global, case-insensitive search for "ain":

let str2 = "The rain in SPAIN stays mainly in the plain";
console.log(str2.match(/ain/gi));

// includes()
// The incluedes() method returns true if a string contains a specified value;

console.log(str2.includes("world"));
console.log(str2.includes("stays"));
console.log(str2.includes("rain", 12));
console.log(str2.includes("rain", 2));


// startsWith()
// The startsWith() method returns true if a string begins with a specified value, otherwise false;

console.log(str2.startsWith("Hello"));
console.log(str2.startsWith("The"));
console.log(str2.startsWith("rain", 4));
console.log(str2.startsWith("rain", 3));

// Note
// The startsWith() method is case sensitive.

// endsWith()
console.log(str2.endsWith("plain"));
console.log(str2.endsWith("plain"));
console.log(str2.endsWith("the",11));













