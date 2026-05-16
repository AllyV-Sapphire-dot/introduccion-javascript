// 1. Declarar el arreglo con varios tipos de frutas
const frutas = ['manzana', 'plátano', 'manzana', 'naranja', 'plátano', 'manzana', 'pera', 'naranja'];

// 2. Crear un objeto vacío para almacenar el conteo
const conteoFrutas = {};

// 3. Usar un ciclo for para recorrer el arreglo
for (let i = 0; i < frutas.length; i++) {
    let frutaActual = frutas[i];

    // Si la fruta ya existe en el objeto, sumamos 1
    if (conteoFrutas[frutaActual]) {
        conteoFrutas[frutaActual]++;
    } else {
        // Si no existe, la inicializamos en 1
        conteoFrutas[frutaActual] = 1;
    }
}

// 4. Imprimir en la consola el resultado
console.log("--- Conteo de Frutas (Ciclo For) ---");
console.log(conteoFrutas);