$(document).ready(function() {
  $("#add-task").on("click", function() {
    //* console.log(this);

    //* Obtiene el elemento de entrada y su contenido.
    const taskInput = $("#task-input");
    //* console.log(taskInput);
    const taskText = taskInput.val().trim();
    
    if(taskText.length > 0) {
      //* Crear el elemento de lista
      const taskItem = $("<li class='list-group d-flex justify-content-between'></li>");
    }


  });
});