//* Un Objeto literal

const mascota = {
  nombre: "Rocky",
  edad: 12,
  vivo: true,
  razas: ['pitbull', 'dogo', 'pastor aleman', 'boxer']
}
//* clave: valor
console.log(mascota);
console.log(mascota.nombre); //* Rocky
console.log(mascota.edad); //* 12
console.log(mascota.vivo); //* true
console.log(mascota.razas[0]); //* pitbull
console.log(mascota.razas[1]); //* dogo
console.log(mascota.razas[2]); //* pastor aleman
console.log(mascota.razas[3]); //* boxer

//* freeze
//* Object.freeze(mascota);
//* agregar una propiedad
mascota.id = 1;
console.log(mascota);

//* modificar edad
mascota.edad = 14;
console.log(mascota);

