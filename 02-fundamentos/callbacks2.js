let empleado = [{
    id: 1,
    nombre: 'Marcos'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Francisco'
}];

let salario = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id, callback) => {

    let empleadoDB = empleado.find(empleado => empleado.id === id);
    // Lo que estamos haciuendo es primero trabajr con una negaci[on para poder disparar un caso de error 
    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {

    let salarioDB = salario.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontro un salario para el usuario ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }

}

//Obtener la informacion del salario y del empleado
getEmpleado(3, (err, empleado) => {

    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }

        console.log(`EL salario de ${ resp.nombre } es de $${ resp.salario}`);

    })
});