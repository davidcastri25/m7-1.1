/* ////////// Interacciono con el DOM ////////// */

//Guardo formulario de coche
const CAR_FORM = document.querySelector("#carFormId") as HTMLFormElement;
    //Guardo inputs del formulario coche
    const MATRICULA = CAR_FORM.querySelector("#carMatricula") as HTMLInputElement;
    const MARCA = CAR_FORM.querySelector("#carMarca") as HTMLInputElement;
    const COLOR = CAR_FORM.querySelector("#carColor") as HTMLInputElement;

//Guardo formulario de ruedas
const WHEEL_FORM = document.querySelector("#wheelFormId") as HTMLFormElement;
    //Guardo inputs del formulario ruedas
    const MARCA_1 = WHEEL_FORM.querySelector("#wheelMarca1") as HTMLInputElement;
    const DIAMETRO_1 = WHEEL_FORM.querySelector("#wheelDiametro1") as HTMLInputElement;
    const MARCA_2 = WHEEL_FORM.querySelector("#wheelMarca2") as HTMLInputElement;
    const DIAMETRO_2 = WHEEL_FORM.querySelector("#wheelDiametro2") as HTMLInputElement;
    const MARCA_3 = WHEEL_FORM.querySelector("#wheelMarca3") as HTMLInputElement;
    const DIAMETRO_3 = WHEEL_FORM.querySelector("#wheelDiametro3") as HTMLInputElement;
    const MARCA_4 = WHEEL_FORM.querySelector("#wheelMarca4") as HTMLInputElement;
    const DIAMETRO_4 = WHEEL_FORM.querySelector("#wheelDiametro4") as HTMLInputElement;

//Guardo div donde irá la info de los coches que mostremos
const CONTAINER = document.querySelector("#carInfo") as HTMLUListElement;