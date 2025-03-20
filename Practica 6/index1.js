const Autenticacion = {
    login(usuario){
        console.log(`${usuario} ha iniciado sesion.`);
    }
};

const Notificaciones = {
    enviarNotificacion(mensaje){
        console.log(`Notificacion: ${mensaje}`);

    }
};

class Usuario { 
    constructor(nombre){
        this.nombre = nombre;
    }
}

Object.assign(Usuario.prototype, Autenticacion, Notificaciones);

const user1 = new Usuario("Kevin Flores");
user1.nombrelogin(user1.nombre);
user1.enviarNotificacion("Tienes un nuevo mensaje de texto.")