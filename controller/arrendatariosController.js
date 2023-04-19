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

const update = async function(req, res)
{
    let a = arrendatariosModel.update(
        req.query.id,
        req.query.rfc,
        req.query.nombre
    );
    await res.json(a);
}

const deleteById = async function(req, res)
{
    let a = arrendatariosModel.deleteById(req.params.id);

    await res.json(a);
}

const deleteAll = async function(req, res)
{
    let result = arrendatariosModel.deleteAll();

    await res.json(result);
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;
module.exports.deleteAll = deleteAll;