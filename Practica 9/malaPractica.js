class Tienda {
    constructor(){
        this.inventario = [];
        this.clientes = [];
    }

    agregarProducto(producto){
        this.inventario.push(producto);
    }

    registrarCliente(cliente){
        this.clientes.push(cliente)
    }

    venderProducto(cliente, producto){
        console.lo(`Vendido ${producto} a ${cliente}`); //Logica mezclada en una sola clase
    }

    enviarEmail(cliente, mensaje){
        console.log(` Enviando correo a ${cliente}: ${mensaje}`);
    }
}

const tienda = new Tienda();
tienda.agregarProducto("Camisa")
tienda.registrarCliente("Ana")
tienda.venderProducto("Ana", "Camisa")
tienda.enviarEmail("Ana", "Gracias Por Su Compra.")
