// Mas de Hoisting en este video https://www.youtube.com/watch?v=uI6o97A4IrI
/* var nameOfDog;

console.log(nameOfDog);
var nameOfDog = "Elmo";
console.log(nameOfDog); */
/*
* Lo que hace el hoisting es lo siguiente:
* var nameOfDog; // undefine
* console.log(nameOfDog);
* nameOfDog = "Elmo";
* No cambia nada de nuestro código, pero de esta forma lo interpreta
*/

nameOfDog();
function nameOfDog() {
  console.log(`El mejor perrito es ${elmo}`);
}

var elmo = "Elminto"
/* 
* El hoisting solo afecta a las funciones, y variables creadas con la palabra reservada "var".
* Lo que hace es colocar estos al inicio de todo, en las funciones, usa todo el código que esta en el bloque, y las variables solo
* su declaración y no la asignación.
*/