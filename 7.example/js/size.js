//* cuando refresque el navegador
window.onload = function() {
  console.log('onload');
  removeMobileNav();
};

//* Escuchar o estar atento al resolución de la ventana

window.addEventListener('resize', function() {
  console.log('resize');
  console.log(window.innerWidth); //* 769
  //* cuando llegue quito la clase del ul
  removeMobileNav();

});