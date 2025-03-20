class CuentaBancaria {
    #saldo;

    constructor(nombre, saldoInicial){
        this.nombre = nombre;
        this.#saldo = saldoInicial; // Propiedad Privada
    }

    depositar(monto){
        if (monto > 0 ){
            this.#saldo += monto;
            console.log(`Deposito exitoso. Nuevo Saldo: $${this.#saldo}`);
        }
    }

    obtenerSaldo(){
        return `Saldo disponible: $${this.#saldo}`;
    }
}

const cuenta1 = new CuentaBancaria("Kevin Flores", 1000);
console.log(cuenta1.obtenerSaldo());
cuenta1.depositar(800)
console.log(cuenta1.obtenerSaldo());;

// X Esto generara error porque es privado
