// Variables creadas dentro de una función solo serán accedidas dentro de la misma
function greeting() {
  let userName = "Ana";
  console.log(userName);

  if (userName === "Ana") {
    console.log(`Hello ${userName}`);
  }
}

greeting();
// No podemos usar las variables que se encuentren dentro de una función desde afuera del mimo
console.log(userName);