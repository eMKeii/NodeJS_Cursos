console.log('Inicio del programa');

setTimeout(function() {
    console.log('Primer Timeeout');
}, 3000);

setTimeout(function() {
    console.log('Segundo Timeeout');
}, 0);

setTimeout(function() {
    console.log('Tercer Timeeout');
}, 0);

console.log('Fin del programa');