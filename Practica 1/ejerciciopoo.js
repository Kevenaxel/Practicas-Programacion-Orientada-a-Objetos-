//Clase
class Coche{
//Atributos
//Metodo Constructor
constructor(marca, modelo, ano, encendido){
    //Inicializar
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.encendido = encendido;
}
//Metodos
showInfo(){
    document.write(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
}
encender(){
    if(this.encendido){
        document.write(`El  auto esta encendido`)
    }else{
        document.write(`El auto esta apagado`);
    }
}
}

//Instancia
let auto1 = new Coche("Nissan", "Frontier", 2005, false);
let auto2 = new Coche ("Toyota", "Corolla", 2010, true);

auto1.encender();
auto2.encender();