//* Un Array (Vector) unidimensionales
//* Nos sirve para agrupar elementos

//* array llamado numeros
//* los indices de un arreglo comienzan desde 0
const numeros = [10, 55, 100]; //* mas moderna
const amigos = new Array('Pedro', 'Juan', 'Diego'); //* como se hacia antes

console.log(numeros[0]); //* imprime 10
console.log(numeros[1]); //* imprime 55
console.log(numeros[2]); //* imprime 100

//* la logintud de numeros es de 3 numeros.length

//* modifiquemos los valores
numeros[0] = 23;
console.log(numeros[0]);
console.log(numeros);

