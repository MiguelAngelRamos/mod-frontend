//* un arreglo vacio 0 elemento longitud 0

const carrito = [];
const producto1 = {
  nombre: 'Iphone 13' ,
  precio: 1200000
}

const producto2 = {
  nombre: 'Notebook Gamer Asus',
  precio: 1600000
}

const producto3 = {
  nombre: 'Teclado Gamer Razer',
  precio: 120000
}

//* existe la función push
carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto3);


//* si la función agrega al final de array si quieres agregar al inicio utiliza unshift
carrito = [ 
  { nombre: 'Iphone 13' , precio: 1200000 }, 
  { nombre: 'Notebook Gamer Asus', precio: 1600000 },
  { nombre: 'Teclado Gamer Razer', precio: 120000 }
];
