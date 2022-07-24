// Es recomendable dejar de usar la palabra reservada var para crear variables, para usar const y let.

// El contexto de bloque es todo lo que este dentro de llaves "{}"
function fruits() {
  if (true) {
    var fruit1 = "Apple";//function scope
    let fruit2 = "Kiwi";//block scope
    const fruit3 = "Banana";//block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);//Mostrara la variable
  /* console.log(fruit2);//Marcara error
  console.log(fruit3);//Marcara error */
}

fruits();