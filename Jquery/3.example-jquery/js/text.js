$(document).ready(function() {
  console.log(this);
  $('#botonTexto').click(function() {
    console.log(this);
    if($('#miTexto').text() == '') {
      $('#miTexto').text('Este es mi texto agregado con jquery');
      $(this).text('Quitar texto');
    } else {
      $('#miTexto').empty();
      $(this).text('Agregar Texto')
    }
  });
});