"use strict";
/* ////////// Interacciono con el DOM ////////// */
//Guardo formulario de coche
var CAR_FORM = document.querySelector("#carFormId");
//Guardo inputs del formulario coche
var MATRICULA = CAR_FORM.querySelector("#carMatricula");
var MARCA = CAR_FORM.querySelector("#carMarca");
var COLOR = CAR_FORM.querySelector("#carColor");
//Guardo formulario de ruedas
var WHEEL_FORM = document.querySelector("#wheelFormId");
//Guardo inputs del formulario ruedas
var MARCA_1 = WHEEL_FORM.querySelector("#wheelMarca1");
var DIAMETRO_1 = WHEEL_FORM.querySelector("#wheelDiametro1");
var MARCA_2 = WHEEL_FORM.querySelector("#wheelMarca2");
var DIAMETRO_2 = WHEEL_FORM.querySelector("#wheelDiametro2");
var MARCA_3 = WHEEL_FORM.querySelector("#wheelMarca3");
var DIAMETRO_3 = WHEEL_FORM.querySelector("#wheelDiametro3");
var MARCA_4 = WHEEL_FORM.querySelector("#wheelMarca4");
var DIAMETRO_4 = WHEEL_FORM.querySelector("#wheelDiametro4");
//Guardo div donde irá la info de los coches que mostremos
var CONTAINER = document.querySelector("#carInfo");
