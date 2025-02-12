//Clases
class Carro{
    //Atributos y metodos constructor
    constructor(color, marca, modelo, ano){
        this.Carro = Carro;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

//Creacion de objeto persona
const persona = {
    //Atributos
    nombre: "Kevin",
    edad: 20,

    //Metodos
    saludar: function(){
        console.log(`Hola usuario ${this.nombre}`)
    }
}

//Metodo de acceso metodo .
console.log(persona.nombre)//Kevin

//Metodo de []
console.log(persona["edad"])//20

//Modificacioones de propiedades
persona.edad = 21;
console.log(persona[`edad`])//21

//Nueva Propiedad
persona.ocupacion = "Desarrollador";
console.log(persona.ocupacion)
console.log(persona)
console.log(persona.saludar)

//Metodo de eliminar propiedad
delete persona.edad
console.log(persona[`edad`])
console.log(persona)