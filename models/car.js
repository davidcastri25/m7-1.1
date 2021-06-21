"use strict";
//Clase Car
var Car = /** @class */ (function () {
    //Constructor, le pasamos matrícula, color y marca y los asignamos a las propiedades correspondientes
    function Car(plate, color, brand) {
        //Ruedas, será de tipo Wheel[] (array de objetos de la clase Wheel) y lo inicializamos como array. Almacenará las ruedas
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    //Método addWheel, le pasamos como parámetro un objeto de la clase Wheel, la función no devolverá ningún valor (función tipo void)
    Car.prototype.addWheel = function (wheel) {
        //La propiedad wheels era un array, hacemos push con el objeto de la clase Wheel
        this.wheels.push(wheel);
    };
    return Car;
}());
