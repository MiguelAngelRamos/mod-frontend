//* Ambito de las variables

//* con var

var edad = 20;

//* condicional if (si)
//* siempre vas a evaluar una condición booleana
//* verdadero o falso "TRUE" OR "FALSE"
console.log(edad < 40);
if(true) {
  //* verdadera si cumple
  var edad = 40;
  console.log(edad); // ?? que valor imprime
} else {
  //* falsa si no se cumple
  console.log('Es falso');
}

console.log(edad); //* deberia ser 20 y no 40

//* var no respeta el scope

//* Con let

let altura = 400;

if(true) {
  let alturaIf = 5;
  console.log(alturaIf); //?? que es su valor 
}

console.log(alturaIf); //* no existe fuera del if
console.log(altura);