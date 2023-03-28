document.addEventListener("DOMContentLoaded", function() {
  //* Obtener el formulario y sus campos
  let form = document.querySelector("#login-form");
  let email = document.querySelector("#input-email");
  let password = document.querySelector("#password-input");

  function validate() {
    //* retornar verdadero o falso
    //* CORREO ELECTRONICO
    let emailValue = email.value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(email.value);
    if(!emailRegex.test(emailValue)) {
      document.querySelector("#emailHelp").innerHTML = "Por favor, ingresa un correo electrónico válido";
      return false;
    } else {
   
    }

    //* CONTRASEÑA
    let passwordValue = password.value;

    if(passwordValue.length < 6) {
      document.querySelector("#passwordHelp").innerHTML = "La contraseña debe tener al menos 6 caracteres";
      return false;
    }
    //* Si todo está bien pasaron todas las validaciones, enviamos el formulario
    return true;
  }

  //* Agregar la función de validación al evento submit del formulario
  form.addEventListener("submit", function(event) {
    
    //* si la función validate nos devuelve falso no enviamos el formulario (event.preventDefault())
    
    if(!validate()) {
      //* true
      event.preventDefault();
      //* impido que se envie el formulario
    } else {
      //* false
      alert('El formulario se envio correctamente');
    }



  })

});



//* DOMContentLoaded es un evento que se activa cuando se ha cargado todo el contenido html y se construido el DOM.

//*???
//* Esto significa que todos los elementos HTML del documento, como el encabezado, el cuerpo, los enlaces, las imagenes, los scripts(externos) y otros recursos, ya se han cargado y estan disponibles para ser "MANIPULADOS MEDIANTE JAVASCRIPT"