// getElementById
//* querySelector
//* Obtener el botón y div
let boton = document.querySelector('#addText');
let vacioDiv = document.querySelector('#miDiv');

//* vamos a estar atento al evento click

boton.addEventListener('click', function() {
  // console.log('se realiza click!');
  const nuevoParrafo = document.createElement('p');
  // console.log(nuevoParrafo);
  nuevoParrafo.textContent = 'Bootcamp Java Full Stack';

  //* Agregamos el nuevo elemento (p) al div vacío
  vacioDiv.appendChild(nuevoParrafo);

  //* Cambiar el estilo del div
  vacioDiv.classList.add('bg-success', 'p-3', 'text-white');
});