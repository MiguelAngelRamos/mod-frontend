function toggleMenu() {
  let nav = document.querySelector("nav ul"); // capturamos el ul
  nav.classList.toggle("mobile-nav");
  console.log(nav)
}

// var numero;
// let numeropar;
// const PI = 3.14;

// ES6

// Esta línea de código utiliza el método classList.toggle() para alternar la clase "mobile-nav" en el elemento nav. Si el elemento ya tiene la clase "mobile-nav", se la quita. Si no la tiene, se la agrega. En otras palabras, esta línea de código alterna la visibilidad del menú móvil.

// En resumen, la función "toggleMenu()" selecciona el elemento de lista no ordenada dentro del elemento de navegación y alterna su clase "mobile-nav" para mostrar y ocultar el menú móvil.