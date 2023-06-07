const propietariosService = require('../service/propietariosService.js');

const getAll = async function(req, res)
{
    let p = await propietariosService.getAll();
    await res.json(p);
}

const getById = async function(req, res)
{
    let p = await propietariosService.getById(req.params.id);
    await res.json(p);
}

const add = async function(req, res)
{
    let p = await propietariosService.add(req.query.propiedadId, req.query.personaId);
    await res.json(p);
}

const update = async function(req, res)
{
    let p = await propietariosService.update(
        req.query.id,
        req.query.propiedadId,
        req.query.personaId
    );
    await res.json(p);
}

const deleteById = async function(req, res)
{
    let p = await propietariosService.deleteById(req.params.id);
    await res.json(p);
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;