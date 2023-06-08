const arrendatariosService = require('../service/arrendatariosService.js');

const getAll = async function(req, res)
{
    let a = await arrendatariosService.getAll();
    await res.json(a);
}

const getById = async function(req, res)
{
    let a = await arrendatariosService.getById(req.params.id);
    await res.json(a);
}

const add = async function(req, res)
{
    let a = await arrendatariosService.add(req.query.propiedadId, req.query.personaId);
    await res.json(a);
}

const update = async function(req, res)
{
    let a = await arrendatariosService.update(
        req.query.id,
        req.query.propiedadId,
        req.query.personaId
    );
    await res.json(a);
}

const deleteById = async function(req, res)
{
    let a = await arrendatariosService.deleteById(req.params.id);

    await res.json(a);
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;