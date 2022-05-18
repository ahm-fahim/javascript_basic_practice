let x = myFunction(4, 3);

function myFunction(a, b){
    return a * b;
}
console.log(x);

// convert fahrenheit to celcius

function toCelcius(fahrenheit){
    return (5 / 9) * (fahrenheit - 32);
}

let y = toCelcius(77);
console.log(y);
console.log(toCelcius);

let text = "The temperature is " + y + " celcius";
console.log(text);
