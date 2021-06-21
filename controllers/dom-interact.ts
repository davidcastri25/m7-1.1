/* ////////// Interacciono con el DOM ////////// */

//Guardo formulario de coche
const carForm = document.querySelector("#carFormId") as HTMLFormElement;
    //Guardo inputs del formulario coche
    const matricula = carForm.querySelector("#carMatricula") as HTMLInputElement;
    const marca = carForm.querySelector("#carMarca") as HTMLInputElement;
    const color = carForm.querySelector("#carColor") as HTMLInputElement;

//Guardo formulario de ruedas
const wheelForm = document.querySelector("#wheelFormId") as HTMLFormElement;
    //Guardo inputs del formulario ruedas
    const marca1 = wheelForm.querySelector("#wheelMarca1") as HTMLInputElement;
    const diametro1 = wheelForm.querySelector("#wheelDiametro1") as HTMLInputElement;
    const marca2 = wheelForm.querySelector("#wheelMarca2") as HTMLInputElement;
    const diametro2 = wheelForm.querySelector("#wheelDiametro2") as HTMLInputElement;
    const marca3 = wheelForm.querySelector("#wheelMarca3") as HTMLInputElement;
    const diametro3 = wheelForm.querySelector("#wheelDiametro3") as HTMLInputElement;
    const marca4 = wheelForm.querySelector("#wheelMarca4") as HTMLInputElement;
    const diametro4 = wheelForm.querySelector("#wheelDiametro4") as HTMLInputElement;

//Guardo div donde irá la info de los coches que mostremos
const container = document.querySelector("#carInfo") as HTMLUListElement;