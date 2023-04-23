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

const add = async function(req, res)
{
    let p = posesionesModel.add(req.query.id_propietario, req.query.id_propiedad);
    await res.json(p);
}

const update = async function(req, res)
{
    let p = posesionesModel.update(req.query.id, req.query.id_propietario, req.query.id_propiedad);
    await res.json(p);
}

const deleteById = async function(req, res)
{
    let p = posesionesModel.deleteById(req.params.id);
    await res.json(p);
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.getPropiedadesByIdPropietario = getPropiedadesByIdPropietario;
module.exports.getPropietariosByIdPropiedad = getPropietariosByIdPropiedad;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;