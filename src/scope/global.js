// El Scope es el alcance que determina la accesibilidad de las variables, otra forma de decir seria, el recorrido 
//que tiene que hacer una variable cuando se llama asta cuando se creo e inicializo la variable, desde diferentes partes del código.

// Tipos de Scope "Global", "Function", "Block"

// Nota: los objetos y funciones también son variables.

// Ejercicio de la clase:

// Variables

var a; // declarando
var b = "b"// declarando / asignamos 
b = "bb" // reasignado
var a = "aa" // redeclaración

// Global Scope: Es cualquier variable que se encuentra dentro del documento y se instancia dentro del objeto "window" y es accesible en todo el documento

var fruit = "Apple"; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();


function countries() {
  country = "Colombia"; // global
  console.log(country);
}

countries();
console.log(country);