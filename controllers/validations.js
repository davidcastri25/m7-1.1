"use strict";
/* ////////// Función de validación de coche ////////// */
function carValidate() {
    //Contador de errores
    var acumErrores = 0;
    //Eliminamos todos los posibles is-invalid o is-valid que aparezcan en la lista de clases de cada elemento del formulario
    CAR_FORM.classList.remove("is-invalid");
    CAR_FORM.classList.remove("is-valid");
    //Validamos matricula
    if (MATRICULA.value == "") {
        //Añadimos clase is-invalid
        MATRICULA.classList.add("is-invalid");
        //Sacamos mensaje de error en el div correspondiente
        CAR_FORM.querySelector("#errorCarMatricula").textContent = "El campo es obligatorio";
        //Sumamos 1 al contador
        acumErrores++;
    }
    else if (!validarMatricula(MATRICULA.value)) {
        //Añadimos clase is-invalid
        MATRICULA.classList.add("is-invalid");
        //Sacamos mensaje de error en el div correspondiente
        CAR_FORM.querySelector("#errorCarMatricula").textContent = "La matrícula no cumple el formato. Debe componerse de 4 dígitos y 3 letras en mayúscula. No introducir espacios.";
        //Sumamos 1 al contador
        acumErrores++;
    }
    else {
        //Añadimos clase is-valid
        MATRICULA.classList.add("is-valid");
    }
    //Validamos marca
    if (MARCA.value == "") {
        MARCA.classList.add("is-invalid");
        CAR_FORM.querySelector("#errorCarMarca").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    else {
        MARCA.classList.add("is-valid");
    }
    //Validamos color
    if (COLOR.value == "") {
        COLOR.classList.add("is-invalid");
        CAR_FORM.querySelector("#errorCarColor").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    else {
        COLOR.classList.add("is-valid");
    }
    //Devolvemos el acumulador de errores
    return acumErrores;
}
/* ////////// Función de validación de rueda ////////// */
function wheelValidate() {
    //Contador de errores
    var acumErrores = 0;
    //Eliminamos todos los posibles is-invalid o is-valid que aparezcan en la lista de clases de cada elemento del formulario
    WHEEL_FORM.classList.remove("is-invalid");
    WHEEL_FORM.classList.remove("is-valid");
    //Validamos marca 1
    if (MARCA_1.value == "") {
        MARCA_1.classList.add("is-invalid");
        WHEEL_FORM.querySelector("#errorWheelMarca1").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    else {
        MARCA_1.classList.add("is-valid");
    }
    //Validamos diámetro 1
    if (DIAMETRO_1.value == "") {
        DIAMETRO_1.classList.add("is-invalid");
        WHEEL_FORM.querySelector("#errorWheelDiametro1").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    else if (!(parseFloat(DIAMETRO_1.value) >= 0.4) || !(parseFloat(DIAMETRO_1.value) <= 2)) {
        DIAMETRO_1.classList.add("is-invalid");
        WHEEL_FORM.querySelector("#errorWheelDiametro1").textContent = "Las ruedas tienen un diámetro mínimo de 0.4 y máximo de 2";
        acumErrores++;
    }
    else {
        DIAMETRO_1.classList.add("is-valid");
    }
    //Validamos marca 2
    if (MARCA_2.value == "") {
        MARCA_2.classList.add("is-invalid");
        WHEEL_FORM.querySelector("#errorWheelMarca2").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    else {
        MARCA_2.classList.add("is-valid");
    }
    //Validamos diámetro 2
    if (DIAMETRO_2.value == "") {
        DIAMETRO_2.classList.add("is-invalid");
        WHEEL_FORM.querySelector("#errorWheelDiametro2").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    else if (!(parseFloat(DIAMETRO_2.value) >= 0.4) || !(parseFloat(DIAMETRO_2.value) <= 2)) {
        DIAMETRO_2.classList.add("is-invalid");
        WHEEL_FORM.querySelector("#errorWheelDiametro2").textContent = "Las ruedas tienen un diámetro mínimo de 0.4 y máximo de 2";
        acumErrores++;
    }
    else {
        DIAMETRO_2.classList.add("is-valid");
    }
    //Validamos marca 3
    if (MARCA_3.value == "") {
        MARCA_3.classList.add("is-invalid");
        WHEEL_FORM.querySelector("#errorWheelMarca3").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    else {
        MARCA_3.classList.add("is-valid");
    }
    //Validamos diámetro 3
    if (DIAMETRO_3.value == "") {
        DIAMETRO_3.classList.add("is-invalid");
        WHEEL_FORM.querySelector("#errorWheelDiametro3").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    else if (!(parseFloat(DIAMETRO_3.value) >= 0.4) || !(parseFloat(DIAMETRO_3.value) <= 2)) {
        DIAMETRO_3.classList.add("is-invalid");
        WHEEL_FORM.querySelector("#errorWheelDiametro3").textContent = "Las ruedas tienen un diámetro mínimo de 0.4 y máximo de 2";
        acumErrores++;
    }
    else {
        DIAMETRO_3.classList.add("is-valid");
    }
    //Validamos marca 1
    if (MARCA_4.value == "") {
        MARCA_4.classList.add("is-invalid");
        WHEEL_FORM.querySelector("#errorWheelMarca4").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    else {
        MARCA_4.classList.add("is-valid");
    }
    //Validamos diámetro 4
    if (DIAMETRO_4.value == "") {
        DIAMETRO_4.classList.add("is-invalid");
        WHEEL_FORM.querySelector("#errorWheelDiametro4").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    else if (!(parseFloat(DIAMETRO_4.value) >= 0.4) || !(parseFloat(DIAMETRO_4.value) <= 2)) {
        DIAMETRO_4.classList.add("is-invalid");
        WHEEL_FORM.querySelector("#errorWheelDiametro4").textContent = "Las ruedas tienen un diámetro mínimo de 0.4 y máximo de 2";
        acumErrores++;
    }
    else {
        DIAMETRO_4.classList.add("is-valid");
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
CAR_FORM.addEventListener('blur', function (event) {
    //Si (el objeto que ha experimentado el evento está vacío), entonces quitaremos de la classList del objeto que ha experimentado el evento (la clase is-invalid). Por tanto, dejará de salir en rojo
    //(event.target! as HTMLInputElement) esta expresión es para hacer type casting y que TypeScript nos permita aplicar el .value y el .classList    
    if (event.target.value != '') {
        event.target.classList.remove('is-invalid');
        event.target.classList.remove('is-valid');
    }
}, true);
WHEEL_FORM.addEventListener('blur', function (event) {
    //Si (el objeto que ha experimentado el evento está vacío), entonces quitaremos de la classList del objeto que ha experimentado el evento (la clase is-invalid). Por tanto, dejará de salir en rojo
    //(event.target! as HTMLInputElement) esta expresión es para hacer type casting y que TypeScript nos permita aplicar el .value y el .classList    
    if (event.target.value != '') {
        event.target.classList.remove('is-invalid');
        event.target.classList.remove('is-valid');
    }
}, true);
