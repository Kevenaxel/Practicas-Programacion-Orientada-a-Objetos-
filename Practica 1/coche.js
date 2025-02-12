const Coche = {
    marca: "Nissan",
    modelo: "Frontier",
    ano: 2005,
    encendido: false,
    encender: function(){
        this.encendido ? console.log(`Vas a joder el auto XD`): console.log(`Encendiendo el auto`); Coche.encendido = true
    },
    apagar: function() {
        if(this.encendido){
            console.log(`Auto apagado`);
            this.encendido = false
        }else{
            console.log(`Auto apagado`);
        }
    }
}