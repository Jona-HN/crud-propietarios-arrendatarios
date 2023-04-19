const arrendatariosModel = require('../model/arrendatarios.js');

const getAll = async function(req, res)
{
    let a = arrendatariosModel.getAll();
    await res.json(a);
}

const getById = async function(req, res)
{
    let a = arrendatariosModel.getById(req.params.id);
    await res.json(a);
}

const add = async function(req, res)
{
    let a = arrendatariosModel.add(req.query.rfc, req.query.nombre);
    await res.json(a);
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;