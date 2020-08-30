let nombre = 'Deadpool';
let real = 'Wade Winston';

// console.log(nombre + ' ' + real);
// console.log(`${ nombre } ${ real }`);

// Comparacipn de valores para conocer si son siomilares en atributos y valores
// let nombreCompleto = nombre + ' ' + real;
// let nombreTemplate = `${ nombre } ${ real}`;

// console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${ nombre } ${ real }`
}

console.log(`El nombre de : ${ getNombre()}`);