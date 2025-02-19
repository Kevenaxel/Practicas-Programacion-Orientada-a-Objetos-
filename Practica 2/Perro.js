const Animal = require('./Animal')

//Extends hereda de otra clase
class Perro extends Animal{
    constructor(nombre, raza, color){
        super(nombre, raza, color)//Metodo constructor de la clase Principal
    }
    getName(){
        return super.getName();
    }
}

let perro1 = new Perro("Firulai", "Chihuahua", "Cafe");
console.log(perro1.getName());