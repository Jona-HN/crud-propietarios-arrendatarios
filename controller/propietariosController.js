const propietariosModel = require('../model/propietarios.js');

const getAll = async function(req, res)
{
    let p = propietariosModel.getAll();
    await res.json(p);
}

const getById = async function(req, res)
{
    let p = propietariosModel.getById(req.params.id);
    await res.json(p);
}

const add = async function(req, res)
{
    let p = propietariosModel.add(req.query.rfc, req.query.nombre);
    await res.json(p);
}

const update = async function(req, res)
{
    let p = propietariosModel.update(
        req.query.id,
        req.query.rfc,
        req.query.nombre
    );
    await res.json(p);
}

const deleteById = async function(req, res)
{
    let p = propietariosModel.deleteById(req.params.id);

    await res.json(p);
}

const deleteAll = async function(req, res)
{
    let result = propietariosModel.deleteAll();

    await res.json(result);
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;
module.exports.deleteAll = deleteAll;