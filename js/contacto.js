let form = document.querySelector('.form');
let nombre = document.querySelector('#nombre');
let email = document.querySelector('#email');
let telefono = document.querySelector('#telefono');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validarInputs()
});

function validarInputs() {
  let nombreValue = nombre.value.trim();
  let emailvalue = email.value.trim();
  let telefonoValue = telefono.value.trim();

  if (nombreValue === '') {
      validarError(nombre, 'Campo requerido*')
  } else {
      validacionOk(nombre)
  }
  if (emailvalue === '') {
    validarError(email, 'Campo requerido*')
  } else {
    validacionOk(email)
  }
  if (telefonoValue === '') {
    validarError(telefono, 'Campo requerido*')
  } else {
    validacionOk(telefono)
  }
}

// funcion que avisa que debe completar el campo
function validarError(input, msje) {
  let formBox = input.parentElement;
  let mensajeError = document.getElementsByClassName('msj-error');
     mensajeError.innerText = "Debe completar este campo";
     formBox.className = 'form_box error';
}

function validacionOk(input){
  let formBox = input.parentElement;
  formBox.className = 'form_box ok';
}