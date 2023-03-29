//* Objeto sobre objeto

const sitioWeb = {
  nombre: 'Google',
  link: {
    enlace: 'www.google.cl'
  },
  redesSociales: {
    youtube: {
      enlace: 'youtube.com/google',
      nombre: 'Google'
    }
  }
}

//* Sabemos que con el operador . podemos acceder a las propiedades(llaves) del objeto, para obtener sus valores

// console.log(sitioWeb.nombre);
// console.log(sitioWeb.link.enlace);

//* QUIERO IMPRIMIR El nombre del canal de youtube y enlace
// console.log(sitioWeb.redesSociales.youtube.enlace);
// console.log(sitioWeb.redesSociales.youtube.nombre);

//* Destructuring 
const {enlace, nombre} = sitioWeb.redesSociales.youtube;
console.log(enlace);
console.log(nombre);