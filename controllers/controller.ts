//Array para almacenar objetos de la clase Car. Será como una base de datos de los coches que vayamos creando
let carBBDD: Car[] = [];

//Variable global, accesible desde cualquier función
let car: Car;



/* ////////// Evento lanzado por el formulario de coche ////////// */
CAR_FORM.addEventListener("submit", (e: Event) => {
    //Variables
    let errores: number; //Para guardar el contador de errores de validación    

    //Anulamos comportamiento por defecto del navegador por el evento submit. De esta forma no refrescará
    e.preventDefault();
    
    //Validamos llamando a la función correspondiente
    errores = carValidate();

    //Si errores es igual a 0, significa que el formulario está validado correctamente y podemos avanzar
    if (errores === 0) {
        //Creamos objeto Car
        crearCar();
        
        //Mostrar objeto Car creado (sin las ruedas)
        mostrarCar();

        //Cambiamos el formulario
        cambiarFormulario();
    }
});


/* ////////// Evento lanzado por el formulario de rueda ////////// */
WHEEL_FORM.addEventListener("submit", (e: Event) => {
    //Variables
    let errores: number; //Para guardar el contador de errores de validación    

    //Anulamos comportamiento por defecto del navegador por el evento submit. De esta forma no refrescará
    e.preventDefault();
    
    //Validamos llamando a la función correspondiente
    errores = wheelValidate();

    //Si errores es igual a 0, significa que el formulario está validado correctamente y podemos avanzar
    if (errores === 0) {
        //Añadimos al objeto car actual las ruedas generadas
        addRuedas();
        
        //Mostrar objeto Car creado (sin las ruedas)
        mostrarCar();

        //Cambiamos el formulario
        cambiarFormulario();
    }
});


/* ////////// Función para crear coches  ////////// */
function crearCar (): void {
    let miMatricula: string; //Para guardar la matrícula validada
    let miMarca: string; //Para guardar la marca validada
    let miColor: string; //Para guardar el color validado

    miMatricula = MATRICULA.value;
    miMarca = MARCA.value.toUpperCase();
    miColor = COLOR.value.toUpperCase();

    car = new Car (miMatricula, miColor, miMarca);
    carBBDD.push(car); //Guardamos el objeto car en el array de BBDD
}


/* ////////// Función para mostrar coches  ////////// */

function mostrarCar (): void {
    //Primero borramos todos los elementos hijos de container existenes, ya que vamos a generar de nuevo la lista
    CONTAINER.innerHTML = '';

    //Declaramos las variables que vamos a usar en la función
    let carID = 1; //Identificador del coche que estamos creando
    let li: HTMLLIElement; //Elemento que va a contener toda la información por cada coche, sería como una ficha de coche
    let h5Car, h5Wheel; //Aquí irán los títulos de los dos apartados dentro de la ficha de coche
    let pMatricula, pMarca, pColor; //Aquí irán los datos del coche
    let wheelCounter: number; //Para ir aumentando en uno el identificador en las ruedas
    let ulRueda: HTMLUListElement; //Por cada rueda crearemos una lista de datos
    let liRueda: HTMLLIElement; //Aquí irá qué rueda es
    let liMarcaRueda: HTMLLIElement; //Aquí irá la marca
    let liDiametroRueda: HTMLLIElement; //Aquí irá el diámetro

    carBBDD.forEach(element => {
        
        //Creamos la entrada en la lista para el coche en cuestión
        li = document.createElement("li");
        li.id = "car-" + carID; //Añadimos una id para tener identificado el li en el que estamos
        li.classList.add("row");
        li.classList.add("mb-4");
        li.classList.add("border");
        li.classList.add("border-success");
        li.classList.add("rounded");
        li.classList.add("border-2");   
        

        //Creamos un encabezado
        h5Car = document.createElement("h5");
        h5Car.innerText = "Coche número " + carID + ":";
        li.append(h5Car); //Añadimos el encabezado al li

        //Creamos parágrafos
        pMatricula = document.createElement("p");
        pMarca = document.createElement("p");
        pColor = document.createElement("p");

        pMatricula.innerText = "Matrícula: " + element.plate;        
            pMatricula.classList.add("col-4");
        pMarca.innerText = "Marca: " + element.brand;        
            pMarca.classList.add("col-4");
        pColor.innerText = "Color: " + element.color;    
            pColor.classList.add("col-4");

        //Añadimos los parágrafos
        li.append(pMatricula);
        li.append(pMarca);
        li.append(pColor);

        //Miramos si el objeto tiene definidas ya las ruedas, si es así añadiremos también los datos de las ruedas
        if (element.wheels.length != 0) {
            //Creamos un encabezado para el apartado de las ruedas
            h5Wheel = document.createElement("h5");
            h5Wheel.innerText = "Ruedas para el coche " + carID + ":";
            li.append(h5Wheel); //Añadimos el encabezado al li

            //Variable contadora de ruedas
            wheelCounter = 1;

            //Creamos listas recorriendo el array de ruedas del objeto actual
            element.wheels.forEach(element => {
                //Creamos los elementos
                ulRueda = document.createElement("ul");
                liRueda = document.createElement("li");
                liMarcaRueda = document.createElement("li");
                liDiametroRueda = document.createElement("li");
                

                //Asignamos cuánto va a ocupar cada lista de info de rueda
                ulRueda.classList.add("col-3");
                ulRueda.classList.add("list-unstyled");

                //Asignamos contenido
                liRueda.innerText = "Rueda " + wheelCounter;
                liMarcaRueda.innerText =  "Marca: " + element.brand;
                liDiametroRueda.innerText = "Diámetro: " + element.diameter;

                //Añadimos los elementos dentro de ul
                ulRueda.append(liRueda);
                ulRueda.append(liMarcaRueda);
                ulRueda.append(liDiametroRueda);

                //Añadimos el ul dentro del li general de coche
                li.append(ulRueda);
                
                wheelCounter ++;
            });
        }

        //En el container que hemos asignado en dom-interact añadimos el li
        CONTAINER.append(li);

        //Aumentamos indice de carID
        carID ++;
    });    
}


/* ////////// Función para añadir ruedas  ////////// */
function addRuedas(): void {
    //Creamos un objeto de la clase Wheel por cada rueda
    let wheel1 = new Wheel (parseFloat(DIAMETRO_1.value), MARCA_1.value.toUpperCase());
    let wheel2 = new Wheel (parseFloat(DIAMETRO_2.value), MARCA_2.value.toUpperCase());
    let wheel3 = new Wheel (parseFloat(DIAMETRO_3.value), MARCA_3.value.toUpperCase());
    let wheel4 = new Wheel (parseFloat(DIAMETRO_4.value), MARCA_4.value.toUpperCase());

    //Llamamos al método de la clase Car addWheel y añadimos a la propiedad wheels (que es un array), las 4 ruedas 
    car.addWheel(wheel1);
    car.addWheel(wheel2);
    car.addWheel(wheel3);
    car.addWheel(wheel4);
}


/* ////////// Función para cambiar formularios  ////////// */
function cambiarFormulario(): void {
    //Miramos si el formulario de coche está visible u oculto, y lo intercambiamos
    if (CAR_FORM.classList.contains("d-flex")) {
        CAR_FORM.classList.remove("d-flex");
        CAR_FORM.classList.add("d-none");
    }
    else if (CAR_FORM.classList.contains("d-none")) {
        CAR_FORM.classList.remove("d-none");
        CAR_FORM.classList.add("d-flex");
    }

    //Miramos si el formulario de ruedas está visible u oculto, y lo intercambiamos
    if (WHEEL_FORM.classList.contains("d-flex")) {
        WHEEL_FORM.classList.remove("d-flex");
        WHEEL_FORM.classList.add("d-none");
    }
    else if (WHEEL_FORM.classList.contains("d-none")) {
        WHEEL_FORM.classList.remove("d-none");
        WHEEL_FORM.classList.add("d-flex");
    }
}


//Función de muestra que crea un coche. Parámetros: matrícula (string), marca (string), color (string)
/*function createCar (plate: string, brand: string, color: string){

    //Creamos un objeto de la clase car pasándole los parámetros de la función
    car = new Car(plate, color, brand);

    //Llamamos al método de la clase Car addWheel, le pasamos un nuevo objeto de la clase Wheel
    car.addWheel(new Wheel(2, "SEAT"));

    //Escribimos en el body la siguiente cadena (nos sustituye todos los elementos que tenemos en el body)
    document.body.innerText = "CAR: PLATE: " + car.plate 
    + " COLOR: " +car.color + " BRAND: " + brand 
    + " WHEELS: " + JSON.stringify(car.wheels); //El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
}  */

