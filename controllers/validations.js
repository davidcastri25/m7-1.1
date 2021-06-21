"use strict";
/* ////////// Función de validación de coche ////////// */
function carValidate() {
    //Contador de errores
    var acumErrores = 0;
    //Eliminamos todos los posibles is-invalid o is-valid que aparezcan en la lista de clases de cada elemento del formulario
    carForm.classList.remove("is-invalid");
    carForm.classList.remove("is-valid");
    //Validamos matricula
    if (matricula.value == "") {
        //Añadimos clase is-invalid
        matricula.classList.add("is-invalid");
        //Sacamos mensaje de error en el div correspondiente
        carForm.querySelector("#errorCarMatricula").textContent = "El campo es obligatorio";
        //Sumamos 1 al contador
        acumErrores++;
    }
    else if (!validarMatricula(matricula.value)) {
        //Añadimos clase is-invalid
        matricula.classList.add("is-invalid");
        //Sacamos mensaje de error en el div correspondiente
        carForm.querySelector("#errorCarMatricula").textContent = "La matrícula no cumple el formato. Debe componerse de 4 dígitos y 3 letras en mayúscula. No introducir espacios.";
        //Sumamos 1 al contador
        acumErrores++;
    }
    else {
        //Añadimos clase is-valid
        matricula.classList.add("is-valid");
    }
    //Validamos marca
    if (marca.value == "") {
        marca.classList.add("is-invalid");
        carForm.querySelector("#errorCarMarca").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    else {
        marca.classList.add("is-valid");
    }
    //Validamos color
    if (color.value == "") {
        color.classList.add("is-invalid");
        carForm.querySelector("#errorCarColor").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    else {
        color.classList.add("is-valid");
    }
    //Devolvemos el acumulador de errores
    return acumErrores;
}
/* ////////// Funciones para validación regex ////////// */
//Matricula
function validarMatricula(matricula) {
    //Declaramos expresión regular: 4 números i 3 lletres (mayúsculas)
    var regex = /^[\d]{4}[A-ZÑ]{3}$/;
    //Comprobamos si el parámetro de la función coincide con la expresión regular
    return regex.test(matricula) ? true : false;
}
//Función que nos sacará la clase is-invalid cuando hagamos blur y detecte que hayamos borrado el texto que había en el campo
//Accedemos a la etiqueta form y vamos a añadirle un evento del tipo blur (evento que inicia cuando, habiendo seleccionado un input, lo deseleccionamos)
//El segundo parámetro es una función cuyo parámetro será el evento en sí que se ha desencadenado
carForm.addEventListener('blur', function (event) {
    //Si (el objeto que ha experimentado el evento está vacío), entonces quitaremos de la classList del objeto que ha experimentado el evento (la clase is-invalid). Por tanto, dejará de salir en rojo
    //(event.target! as HTMLInputElement) esta expresión es para hacer type casting y que TypeScript nos permita aplicar el .value y el .classList    
    if (event.target.value != '') {
        event.target.classList.remove('is-invalid');
        event.target.classList.remove('is-valid');
    }
}, true);
