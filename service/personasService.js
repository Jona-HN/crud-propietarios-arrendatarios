const models = require('../models');

const getAll = async function()
{    
    return await models.Persona.findAll();
}

const getById = async function(id)
{
    return await models.Persona.findByPk(id);
}

const add = async function(rfc, nombre)
{
    let nuevaPersona = {
        rfc: rfc,
        nombre: nombre,
        createdAt: new Date(),
        updatedAt: new Date()
    };

    await models.Persona.create(nuevaPersona);

    return await models.Persona.findAll();
}

const update = async function(id, rfc, nombre)
{
    let personaModificada = {
        rfc: rfc,
        nombre: nombre,
        updatedAt: new Date()
    };

    await models.Persona.update(personaModificada, {
        where: {
            id: id
        }
    });

    return await models.Persona.findAll();
}

const deleteById = async function(id)
{
    await models.Persona.destroy({
        where: {
            id: id
        }
    });

    return await models.Persona.findAll();
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;