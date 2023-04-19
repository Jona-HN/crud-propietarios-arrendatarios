const arrendatarios = [
    {
        id: 1,
        rfc: 'RIMD770826HQTSRN37',
        nombre: 'Daniel Rios Moreno',
    },
    {
        id: 2,
        rfc: 'CAGJ770826HMCHTS69',
        nombre: 'José Guadalupe Chavez Gutiérrez',
    },
    {
        id: 3,
        rfc: 'MAGR770826HBSRTB79',
        nombre: 'Rubén Martínez Gutiérrez',
    }
];

function getAll()
{
    return arrendatarios;
}

function getById(id)
{
    let a = arrendatarios.find(a => a.id == id);

    if (a == null) {
        a = { error: `Arrendatario con id ${id} no encontrado` };
    }

    return a;
}

function add(rfc, nombre)
{
    let last = arrendatarios.slice(-1)[0];

    let newItem = {
        id: last != null ? last.id + 1 : 1,
        rfc: rfc,
        nombre: nombre
    };

    arrendatarios.push(newItem);

    return arrendatarios;
}

function update(id, newRfc, newNombre)
{
    let a = getById(id);

    if (a.id != null)
    {
        let indexOfA = arrendatarios.indexOf(a);
        a.rfc = newRfc || a.rfc;
        a.nombre = newNombre || a.nombre;
        arrendatarios[indexOfA] = a;

        return arrendatarios;
    }
    else
    {
        return a;
    }
}

function deleteById(id)
{
    if (!arrendatarios.length)
    {
        return { error: 'No hay arrendatarios registrados' };
    }
    
    let a = getById(id);

    if (a.id != null)
    {
        let indexOfA = arrendatarios.indexOf(a);
        arrendatarios.splice(indexOfA, 1);
        
        return arrendatarios;
    }
    else
    {
        return a;
    }
}

function deleteAll()
{
    if (arrendatarios.length)
    {
        arrendatarios.length = 0;
        
        return { resultado: 'Arrendatarios eliminados correctamente' };
    }
    else
    {
        return { error: 'No hay arrendatarios registrados' };
    }
}

module.exports.default = arrendatarios;
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;
module.exports.deleteAll = deleteAll;