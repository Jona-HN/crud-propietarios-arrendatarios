const posesionesModel = require('../model/posesiones.js');

const getAll = async function(req, res)
{
    let p = posesionesModel.getAll();
    await res.json(p);
}

const getById = async function(req, res)
{
    let p = posesionesModel.getById(req.params.id);
    await res.json(p);
}

const getPropiedadesByIdPropietario = async function(req, res)
{
    let p = posesionesModel.getPropiedadesByIdPropietario(req.params.id);
    await res.json(p);
}

const getPropietariosByIdPropiedad = async function(req, res)
{
    let p = posesionesModel.getPropietariosByIdPropiedad(req.params.id);
    await res.json(p);
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.getPropiedadesByIdPropietario = getPropiedadesByIdPropietario;
module.exports.getPropietariosByIdPropiedad = getPropietariosByIdPropiedad;