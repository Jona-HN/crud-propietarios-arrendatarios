const propiedadesModel = require('./propiedades.js');
const propietariosModel = require('./propietarios.js');

const posesiones = [
    {
        id: 1,
        id_propietario: 1,
        id_propiedad: 1
    },
    {
        id: 1,
        id_propietario: 1,
        id_propiedad: 2
    },
    {
        id: 2,
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

module.exports.default = posesiones;
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.getPropiedadesByIdPropietario = getPropiedadesByIdPropietario;
module.exports.getPropietariosByIdPropiedad = getPropietariosByIdPropiedad;