const propietarios = [
    {
        id: 1,
        rfc: 'PESP770826HCSNTB64',
        nombre: 'Pablo Pena Soto',
    },
    {
        id: 2,
        rfc: 'VARM770826MNTLYR12',
        nombre: 'María Luisa Valdez Reyes',
    },
    {
        id: 3,
        rfc: 'AARF770826HCHLVR76',
        nombre: 'Francisco Javier Álvarez Rivera',
    }
];

function getAll()
{
    return propietarios;
}

function getById(id)
{
    let p = propietarios.find(p => p.id == id);

    if (p == null) {
        p = { error: `Propietario con id ${id} no encontrado` };
    }

    return p;
}

function add(rfc, nombre)
{
    let last = propietarios.slice(-1)[0];

    let newItem = {
        id: last != null ? last.id + 1 : 1,
        rfc: rfc,
        nombre: nombre
    };

    propietarios.push(newItem);

    return propietarios;
}

function update(id, newRfc, newNombre)
{
    let p = getById(id);

    if (p.id != null)
    {
        let indexOfP = propietarios.indexOf(p);
        p.rfc = newRfc || p.rfc;
        p.nombre = newNombre || p.nombre;
        propietarios[indexOfP] = p;

        return propietarios;
    }
    else
    {
        return p;
    }
}

function deleteById(id)
{
    if (!propietarios.length)
    {
        return { error: 'No hay propietarios registrados' };
    }
    
    let p = getById(id);

    if (p.id != null)
    {
        let indexOfP = propietarios.indexOf(p);
        propietarios.splice(indexOfP, 1);
        
        return propietarios;
    }
    else
    {
        return p;
    }
}

function deleteAll()
{
    if (propietarios.length)
    {
        propietarios.length = 0;
        
        return { resultado: 'Propietarios eliminados correctamente' };
    }
    else
    {
        return { error: 'No hay propietarios registrados' };
    }
}

module.exports.default = propietarios;
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;
module.exports.deleteAll = deleteAll;