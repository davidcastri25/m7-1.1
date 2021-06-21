//Array para almacenar objetos de la clase Car. Será como una base de datos de los coches que vayamos creando
let carBBDD: Car[] = [];

//Variable global, accesible desde cualquier función
let car: Car;



/* ////////// Evento lanzado por el formulario de coche ////////// */
carForm.addEventListener("submit", (e: Event) => {
    //Variables
    let errores: number; //Para guardar el contador de errores de validación
    let miMatricula: string; //Para guardar la matrícula validada
    let miMarca: string; //Para guardar la marca validada
    let miColor: string; //Para guardar el color validado

    //Anulamos comportamiento por defecto del navegador por el evento submit. De esta forma no refrescará
    e.preventDefault();
    
    //Validamos llamando a la función correspondiente
    errores = carValidate();

    //Si errores es igual a 0, significa que el formulario está validado correctamente y podemos avanzar
    if (errores === 0) {
        //Creamos objeto Car
        miMatricula = matricula.value;
        miMarca = marca.value.toUpperCase();
        miColor = color.value.toUpperCase();

        car = new Car (miMatricula, miColor, miMarca);
        carBBDD.push(car); //Guardamos el objeto car en el array de BBDD
        
        //Mostrar objeto Car creado (sin las ruedas)
        mostrarCar();

        //Cambiamos el formulario
    }
});



/* ////////// Función para mostrar coches  ////////// */

function mostrarCar (): void {
    //Primero borramos todos los elementos hijos de container
    container.innerHTML = '';

    //Declaramos las variables que vamos a usar en la función
    let carID = 1; //Identificador del coche que estamos creando
    let li: HTMLLIElement; //Elemento que va a contener toda la información por cada coche
    let h5Car, h5Wheel;
    let pMatricula, pMarca, pColor, pRueda;

    carBBDD.forEach(element => {
        
        //Creamos la entrada en la lista para el coche en cuestión
        li = document.createElement("li");
        li.id = "car-" + carID; //Añadimos una id para tener identificado el li en el que estamos
        li.classList.add("row");
        li.classList.add("mb-4");

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

            //Creamos parágrafos recorriendo el array de ruedas del objeto actual
            element.wheels.forEach(element => {
                pRueda = document.createElement("p");
                pRueda.innerText = "Rueda 1: " + "Marca: " + element.brand + "Diámetro: " + element.diameter;        
                pRueda.classList.add("col-4");
                li.append(pRueda);
            });
        }

        //En el container que hemos asignado en dom-interact añadimos el li
        container.append(li);

        //Aumentamos indice de carID
        carID ++;
    });

    /*//Primero creamos la entrada en la lista para el coche en cuestión
    const li = document.createElement("li");
    li.id = "car-" + carID; //Añadimos una id para tener identificado el li en el que estamos
    li.classList.add("row");
    
    //Creamos un encabezado
    const h5 = document.createElement("h5");
    h5.innerText = "Coche número " + carID + ":";
    li.append(h5); //Añadimos el encabezado al li

    //Creamos parágrafos
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = "Matrícula: " + car.plate;
        // p1.classList.add("mx-3");
        // p1.classList.add("d-flex");
        p1.classList.add("col-4");
    p2.innerText = "Marca: " + car.brand;
        // p2.classList.add("mx-3");
        // p2.classList.add("d-flex");
        p2.classList.add("col-4");
    p3.innerText = "Color: " + car.color;
        // p3.classList.add("mx-3");
        // p3.classList.add("d-flex");
        p3.classList.add("col-4");

    li.append(p1);
    li.append(p2);
    li.append(p3);
    
    //En el container que hemos asignado en dom-interact
    container.append(li);  */
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

