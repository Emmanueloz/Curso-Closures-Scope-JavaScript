/* El modo estricto tiene varios cambios en la semántica normal de JavaScript:

1.- Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.

2.- Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto 

3.-Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript 

Se activa al colocar "use string dentro bloque de ejecución o cerca de las linease de código que te gustaría que use el strict mode"*/

//var pi; // undefine
'use strict';
pi = 3.1416
console.log(pi);

function myFunction() {
  'use strict';
  return pi = 3.1416
}

console.log(myFunction())