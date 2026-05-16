// Programa para evaluar la nota de un estudiante

// Variable con la nota del estudiante
let nota = 75;

// Verificar que la nota sea valida
if (nota >= 0 && nota <= 100) {

    console.log("La nota del estudiante es:", nota);

    // Evaluar la nota
    if (nota >= 90) {
        console.log("Resultado: Excelente");
    } else if (nota >= 75) {
        console.log("Resultado: Bien");
    } else if (nota >= 60) {
        console.log("Resultado: Suficiente");
    } else {
        console.log("Resultado: No aprueba");
    }

} else {
    console.log("La nota ingresada no es valida");
}