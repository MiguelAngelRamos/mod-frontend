$(document).ready(function(){
  //* cuando el documento esté cargado, se ejecuta esta función
  $("#nueva-tarea").submit(function(event) {
    event.preventDefault(); //* evitamos que se recargue la página
    let tarea = $("input").val(); //* Obtenemos el valor del input
  })
});