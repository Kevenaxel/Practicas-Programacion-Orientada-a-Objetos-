const Comunicacion = {
    enviarMensaje(mensaje){
        console.log(`${this.nombre} envio: ${mensaje}`);
    }
};

const Registro = {
    registrarAccion(accion){
        console.log(`${this.nombre} realizo: ${accion}`);
    }
};

class Usuario {
    constructor(nombre){
        this.nombre = nombre;
    }
}

Object.assign(Usuario.prototype, Comunicacion, Registro);

const user1 = new Usuario("Carlos");
user1.enviarMensaje("Hola, Como estas");
user1.registrarAccion("Inicio de seccion");