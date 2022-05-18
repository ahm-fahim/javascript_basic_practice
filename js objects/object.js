const car = { brand: "Fiat", model: "500UV", color: "white" };

console.log(car);
console.log(car.brand);
console.log(car["brand"]);

const person ={
    firstName: "Fahim",
    lastName : "Morshed",
    id : 333999,
    fullName: function(){
        return this.firstName = " " + this.lastName;
    }
};

console.log(person);
console.log(person.fullName());
