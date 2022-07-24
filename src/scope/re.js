var firstName;//Undefine
firstName = "David";
console.log(firstName);

var lastName = "Ozuna";// declarando / asignando
lastName = "Navarro";// reasignar
console.log(lastName);

var secondName = "David";// declarando / asignando
var secondName = "Ana";// reasignar
console.log(secondName);

// let
let fruit = "Apple"; // declara y asignar
fruit = "Kiwi"; // reasignar
console.log(fruit)

//let fruit = "Banana";// No se puede redeclarar
console.log(fruit)

// const
const animal = "dog"; // declara y asigna
// animal = "cat";// reasignado
//const animal = "snake";
console.log(animal);

// const en arreglos no es inmutable, es decir que se puede modificar cuando const sea un arreglo.
const vehicles = [];
vehicles.push("🏎️");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
