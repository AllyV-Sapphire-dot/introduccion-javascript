// Array para guardar los libros leídos
let librosLeidos = [];

// Función para agregar libros
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

// Función para mostrar libros
function mostrarLibrosLeidos() {
    console.log("Libros leídos:");

    for (let i = 0; i < librosLeidos.length; i++) {
        console.log("- " + librosLeidos[i]);
    }
}

// Ejemplos
agregarLibro("Cien años de soledad");
agregarLibro("El principito");
agregarLibro("Harry Potter");

mostrarLibrosLeidos();