//Clase Wheel
class Wheel{
    //Diámetro
    public diameter: number;
    //Marca
    public brand: string;

    //Constructor, pasamos como parámetro un diámetro de tipo number y una marca de tipo string y asignamos a propiedades correspondientes
    constructor (diameter: number, brand: string) {        
        this.diameter = diameter;
        this.brand = brand;
    }

}