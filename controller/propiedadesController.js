const propiedadesModel = require('../model/propiedades.js');

const getAll = async function(req, res)
{
    let p = propiedadesModel.getAll();
    await res.json(p);
}

const getById = async function(req, res)
{
    let p = propiedadesModel.getById(req.params.id);
    await res.json(p);
}

const getPropiedadesByIdArrendatario = async function(req, res)
{
    let p = propiedadesModel.getPropiedadesByIdArrendatario(req.params.id);
    await res.json(p);
}

const add = async function(req, res)
{
    let p = propiedadesModel.add(
        req.query.clave_catastral,
        req.query.descripcion,
        req.query.id_arrendatario
    );
    await res.json(p);
}

const update = async function(req, res)
{
    let p = propiedadesModel.update(
        req.query.id,
        req.query.clave_catastral,
        req.query.descripcion,
        req.query.id_arrendatario
    );
    await res.json(p);
}

const deleteById = async function(req, res)
{
    let p = propiedadesModel.deleteById(req.params.id);

    await res.json(p);
}

const deleteAll = async function(req, res)
{
    let result = propiedadesModel.deleteAll();

    await res.json(result);
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.getPropiedadesByIdArrendatario = getPropiedadesByIdArrendatario;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;
module.exports.deleteAll = deleteAll;