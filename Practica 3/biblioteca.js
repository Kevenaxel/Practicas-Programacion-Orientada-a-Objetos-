class Libro{
    constructor(titulo, autor, anioPublicacion){
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }
}

class Biblioteca{
    constructor(){
        this.libros = [];
    }

    agregarLibro(titulo, autor, anioPublicacion){
        const nuevoLibro = new Libro(titulo, autor, anioPublicacion);
        this.libros.push(nuevoLibro)
    }
    buscarPortitulo(titulo){
        const libroEncontrado = this.libros.filter(libro => libro.titulo.includes(titulo))
        if(libroEncontrado.length > 0){
            console.log(`Libro encontrado`);
            libroEncontrado.forEach(libro => {
                console.log(`${libro.titulo} de ${libro.autor} publicado en: ${libro.anioPublicacion}`)
            })
        }else{
            console.log(`No se encontro libro con dicho titulo: ${titulo}`);
        }
    }

    mostrarLibros(){
        if(this.libros.length > 0){
            console.log("LIBROS DISPONIBLES:");
            this.libros.forEach(libro => {
                console.log(`${libro.titulo} de ${libro.autor} publicado en ${libro.anioPublicacion}`)
            })
        }else{
            console.log(`Biblioteca vacia!`)
        }
    }
}

const miBiblioteca = new Biblioteca();
//miBiblioteca.mostrarLibros();

miBiblioteca.agregarLibro("Primer titulo", "Yo", "2025")
miBiblioteca.mostrarLibros();

miBiblioteca.buscarPortitulo("Primer titulo")
