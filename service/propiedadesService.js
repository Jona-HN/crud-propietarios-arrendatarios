const models = require('../models');

const getAll = async function()
{    
    return await models.Propiedad.findAll();
}

const getById = async function(id)
{
    return await models.Propiedad.findByPk(id);
}

const add = async function(cve_catastral, descripcion, direccion)
{
    let nuevaPropiedad = {
        cve_catastral: cve_catastral,
        descripcion: descripcion,
        direccion: direccion,
        createdAt: new Date(),
        updatedAt: new Date()
    };

    await models.Propiedad.create(nuevaPropiedad);

    return await models.Propiedad.findAll();
}

const update = async function(id, cve_catastral, descripcion, direccion)
{
    let propiedadModificada = {
        cve_catastral: cve_catastral,
        descripcion: descripcion,
        direccion: direccion,
        updatedAt: new Date()
    };

    await models.Propiedad.update(propiedadModificada, {
        where: {
            id: id
        }
    });

    return await models.Propiedad.findAll();
}

const deleteById = async function(id)
{
    await models.Propiedad.destroy({
        where: {
            id: id
        }
    });

    return await models.Propiedad.findAll();
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;