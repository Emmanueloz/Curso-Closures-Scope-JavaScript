/* 
Permite acceder al ámbito de una función exterior desde una función interior.
En JavaScript, las clausuras se crean cada vez que una función es creada.

A diferencia de otros conceptos como funciones, variables u otros.
Los closures no son siempre utilizados.

Aprender el concepto es saber identificar cuando lo estás utilizado.

Probablemente, es que ya lo has usado cientos de veces.

Tienes una closure cuando una función cualquiera accede a una variable fuera de su contexto.


De forma sencilla, en JavaScript un Closure se crea cuando tenemos una función (Padre) y dentro tenemos funciones (Hijas), es decir tenemos funciones anidadas.
Luego gracias al “Ámbito Léxico” podemos tener acceso a las variables de la función “Padre” desde la función “Hijo”.

Mas de closures en este video https://www.youtube.com/watch?v=JXG_gQ0OF74.
*/
// Ámbito léxico.
const myGLobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGLobal);

  function parent() { // Función interna | Ya tenemos un closure
    const inner = 2;
    console.log(myNumber, myGLobal);

    function child() {
      console.log(inner, myNumber, myGLobal);
    }

    return child();
  }

  return parent();
}

myFunction()