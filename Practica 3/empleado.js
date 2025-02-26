class Empleado{
    #sueldo;
    constructor(nombre, puesto, sueldo){
        this.nombre = nombre;
        this.puesto = puesto;
        this.#sueldo = sueldo
    }

    getSueldo(){
        return this.#sueldo;
    }
    setSueldo(nuevoSueldo){
        if(nuevoSueldo > this.#sueldo){
            this.#sueldo = nuevoSueldo;
        }else{
            console.log("No hay.");
        }
    }

    showInfo(){
        console.log(`Empleado: ${this.nombre}, Puesto: ${this.puesto}, sueldo: ${this.#sueldo}`)
    }
}

const empleado1 = new Empleado("Kevin Flores", "Desarrollador", "700");
empleado1.showInfo();//Info Personal
empleado1.setSueldo(100);//No hay
empleado1.showInfo();//Info Personal
empleado1.setSueldo(2000)//Modifica el sueldo
empleado1.showInfo();//Info Personal
