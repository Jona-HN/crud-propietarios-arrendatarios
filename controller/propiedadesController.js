const propiedadesService = require('../service/propiedadesService.js');

const getAll = async function(req, res)
{
    let p = await propiedadesService.getAll();
    await res.json(p);
}

const getById = async function(req, res)
{
    let p = await propiedadesService.getById(req.params.id);
    await res.json(p);
}

const add = async function(req, res)
{
    let p = await propiedadesService.add(
        req.body.cve_catastral,
        req.body.descripcion,
        req.body.direccion
    );
    await res.json(p);
}

const update = async function(req, res)
{
    let p = await propiedadesService.update(
        req.body.id,
        req.body.cve_catastral,
        req.body.descripcion,
        req.body.direccion
    );
    await res.json(p);
}

const deleteById = async function(req, res)
{
    let p = await propiedadesService.deleteById(req.params.id);
    await res.json(p);
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;