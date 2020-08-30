// funciones normales
// function sumar(a, b) {
//     return a + b;
// }

// Funciones de flecha
// let sumar = (a, b) => {
//     return a + b;
// }

// Funciones de flecha de una sola linea (return)
// let sumar = (a, b) => a + b;
// let saludar = () => 'Hola Mundo';

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return (`${ this.nombre} ${ this.apellido } - poder: ${ this.poder }`)
    }
};

console.log(deadpool.getNombre());


// console.log(saludar());


// console.log(sumar(10, 20));