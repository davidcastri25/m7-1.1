//Clase Car
class Car{
    //Matrícula
    plate: string;
    //Color
    color: string;
    //Marca
    brand: string;
    //Ruedas, será de tipo Wheel[] (array de objetos de la clase Wheel) y lo inicializamos como array. Almacenará las ruedas
    wheels: Wheel[] = new Array();
    
    //Constructor, le pasamos matrícula, color y marca y los asignamos a las propiedades correspondientes
    constructor (plate: string, color: string, brand: string) {
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    
    //Método addWheel, le pasamos como parámetro un objeto de la clase Wheel, la función no devolverá ningún valor (función tipo void)
    addWheel (wheel: Wheel): void {
        //La propiedad wheels era un array, hacemos push con el objeto de la clase Wheel
        this.wheels.push(wheel);
    }
}