const propiedadesModel = require('./propiedades.js');
const propietariosModel = require('./propietarios.js');

const posesiones = [
    {
        id: 1,
        id_propietario: 1,
        id_propiedad: 1
    },
    {
        id: 2,
        id_propietario: 1,
        id_propiedad: 2
    },
    {
        id: 3,
        id_propietario: 2,
        id_propiedad: 1
    }
];


function getAll()
{
    let posesionesMapped = posesiones.map((p) => {
        let map = {
            id: p.id,
            propietarios: propietariosModel.getById(p.id_propietario),
            propiedades: propiedadesModel.getById(p.id_propiedad)
        }

        return map;
    });

    return posesionesMapped;
}

function getById(id)
{
    let p = posesiones.find(p => p.id == id);

    if (p)
    {
        let map = {
            id: p.id,
            propietarios: propietariosModel.getById(p.id_propietario),
            propiedades: propiedadesModel.getById(p.id_propiedad)
        }

        return map;
    }
    else
    {
        p = { error: `Posesión con id ${id} no encontrada` };
    }

    return p;
}

function getPropiedadesByIdPropietario(id_propietario)
{
    let propiedades = [];

    for (let p of posesiones)
    {
        if (p.id_propietario == id_propietario)
        {
            let propiedad = propiedadesModel.getById(p.id_propiedad);
            propiedades.push(propiedad);
        }
    }

    if (propiedades.length)
    {
        return propiedades;
    }
    else
    {
        return { error: `El propietario con id ${id_propietario} no existe o no posee propiedades` };
    }
}

function getPropietariosByIdPropiedad(id_propiedad)
{
    let propietarios = [];

    for (let p of posesiones)
    {
        if (p.id_propiedad == id_propiedad)
        {
            let propietario = propietariosModel.getById(p.id_propietario);
            propietarios.push(propietario);
        }
    }

    if (propietarios.length)
    {
        return propietarios;
    }
    else
    {
        return { error: `La propiedad con id ${id_propiedad} no existe o no posee propietarios` };
    }
}

function add(id_propietario, id_propiedad)
{
    let last = posesiones.slice(-1)[0];

    let newItem = {
        id: last ? last.id + 1 : 1,
        id_propietario: parseInt(id_propietario),
        id_propiedad: parseInt(id_propiedad)
    };

    posesiones.push(newItem);

    return posesiones;
}

function update(id, newIdPropietario, newIdPropiedad)
{
    let p = posesiones.find(p => p.id == id);

    if (p)
    {
        let indexOfP = posesiones.indexOf(p);
        p.id_propietario = parseInt(newIdPropietario) || p.id_propietario;
        p.id_propiedad = parseInt(newIdPropiedad) || p.id_propiedad;
        posesiones[indexOfP] = p;

        return posesiones;
    }
    else
    {
        return { error: `Posesión con id ${id} no encontrada` };
    }
}

function deleteById(id)
{
    if (!posesiones.length)
    {
        return { error: 'No hay posesiones registradas' };
    }
    
    let p = posesiones.find(p => p.id == id);

    if (p)
    {
        let indexOfP = posesiones.indexOf(p);
        posesiones.splice(indexOfP, 1);
        
        return posesiones;
    }
    else
    {
        return p;
    }
}

module.exports.default = posesiones;
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.getPropiedadesByIdPropietario = getPropiedadesByIdPropietario;
module.exports.getPropietariosByIdPropiedad = getPropietariosByIdPropiedad;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;