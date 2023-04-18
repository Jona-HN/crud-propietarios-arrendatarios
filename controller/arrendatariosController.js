const arrendatariosModel = require('../model/arrendatarios.js');

const getAll = async function(req, res)
{
    let a = arrendatariosModel.getAll();
    await res.json(a);
}

module.exports.getAll = getAll;