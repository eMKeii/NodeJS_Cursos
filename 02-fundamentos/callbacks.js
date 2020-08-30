// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000);

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Marcos',
        id
    }

    if (id == 20) {
        callback(`El usuario con id ${ id }, no existe`);
    } else {
        callback(null, usuario);
    }
}

//Para detectar errorres el priemer alor del callback
// por lo general es el valor del error, esto permite que 
//el programa finalice una vez quese ha llegado al error.
getUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});