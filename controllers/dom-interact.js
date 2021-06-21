"use strict";
/* ////////// Interacciono con el DOM ////////// */
//Guardo formulario de coche
var carForm = document.querySelector("#carFormId");
//Guardo inputs del formulario coche
var matricula = carForm.querySelector("#carMatricula");
var marca = carForm.querySelector("#carMarca");
var color = carForm.querySelector("#carColor");
//Guardo formulario de ruedas
var wheelForm = document.querySelector("#wheelFormId");
//Guardo inputs del formulario ruedas
var marca1 = wheelForm.querySelector("#wheelMarca1");
var diametro1 = wheelForm.querySelector("#wheelDiametro1");
var marca2 = wheelForm.querySelector("#wheelMarca2");
var diametro2 = wheelForm.querySelector("#wheelDiametro2");
var marca3 = wheelForm.querySelector("#wheelMarca3");
var diametro3 = wheelForm.querySelector("#wheelDiametro3");
var marca4 = wheelForm.querySelector("#wheelMarca4");
var diametro4 = wheelForm.querySelector("#wheelDiametro4");
//Guardo div donde irá la info de los coches que mostremos
var container = document.querySelector("#carInfo");
