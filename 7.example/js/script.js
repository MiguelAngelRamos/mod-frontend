function toggleMenu() {
  let nav = document.querySelector("nav ul"); // capturamos el ul
  nav.classList.toggle("mobile-nav"); //* le agrega y le quita la clase al ul
  console.log(nav)
}

function removeMobileNav() {

  //* condicionales Si

  if(window.innerWidth >= 769) {
    console.log('resolución');
    let navMenu = document.querySelector('#nav-menu'); //* capturar al ul para quitarle la clase
    navMenu.classList.remove('mobile-nav');
  }

}


// var numero;
// let numeropar;
// const PI = 3.14;

// ES6

// Esta línea de código utiliza el método classList.toggle() para alternar la clase "mobile-nav" en el elemento nav. Si el elemento ya tiene la clase "mobile-nav", se la quita. Si no la tiene, se la agrega. En otras palabras, esta línea de código alterna la visibilidad del menú móvil.
