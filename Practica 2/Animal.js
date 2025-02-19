//Clase
class Animal{
    //Atributos
    #name; //Atributo privado
    _raza; //Atributo protegido
    color; //Atributo publico
    //Metodos
    constructor(name, raza, color){
        this.#name = name;
        this._raza = raza;
        this.color = color
    }
    //Metodo
    //Metodos Getters
    getName(){
        return this.#name;
    }
    sonido(){
        console.log(`EL animal esta haciendo un sonido`)
    }
}
module.exports = Animal;