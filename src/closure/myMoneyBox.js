/* function moneyBox(coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5); */

// Usar una closure nos permitirá guardar el valor de una variable.

function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox $${saveCoins}`);// Ámbito léxico
  }
  return countCoins;
}

const myMoneyBox = moneyBox();//Creamos una nueva instancia de la función  
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);
const moneyBoxAna = moneyBox()//Al crear una nueva instancia de una función esta podemos usar la función con diferentes datos
moneyBoxAna(10);
moneyBoxAna(10);
moneyBoxAna(5);
