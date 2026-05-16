// Objeto libro
const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    estado: "disponible",

    // Lista de capítulos
    capitulos: [],

    // Método para describir el libro
    describirLibro: function () {
        console.log(
            "Libro titulado " + this.titulo +
            ", escrito por " + this.autor +
            " en el año " + this.anio +
            ", el estado es: " + this.estado + "."
        );
    },

    // Método para agregar capítulos
    agregarCapitulo: function (capitulo) {
        this.capitulos.push(capitulo);
    },

    // Método para eliminar capítulos
    eliminarCapitulo: function (capitulo) {
        this.capitulos = this.capitulos.filter(
            c => c !== capitulo
        );
    }
};

// Agregar capítulos
libro.agregarCapitulo("Capítulo 1");
libro.agregarCapitulo("Capítulo 2");

// Mostrar información del libro
libro.describirLibro();

// Mostrar capítulos
console.log("Capítulos:", libro.capitulos);

// Eliminar un capítulo
libro.eliminarCapitulo("Capítulo 1");

// Mostrar capítulos actualizados
console.log("Capítulos actualizados:", libro.capitulos);