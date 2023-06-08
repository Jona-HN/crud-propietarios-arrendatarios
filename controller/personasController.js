const personasService = require('../service/personasService.js');

const getAll = async function(req, res)
{
    let p = await personasService.getAll();
    await res.json(p);
}

const getById = async function(req, res)
{
    let p = await personasService.getById(req.params.id);
    await res.json(p);
}

const add = async function(req, res)
{
    let p = await personasService.add(
        req.body.rfc,
        req.body.nombre
    );
    await res.json(p);
}

const update = async function(req, res)
{
    let p = await personasService.update(
        req.body.id,
        req.body.rfc,
        req.body.nombre
    );
    await res.json(p);
}

const deleteById = async function(req, res)
{
    let p = await personasService.deleteById(req.params.id);
    await res.json(p);
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;