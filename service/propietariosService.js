const models = require('../models');

const getAll = async function()
{    
    return await models.Propietario.findAll();
}

const getById = async function(id)
{
    return await models.Propietario.findAll({
        where: {
            id: id
        }
    });
}

const add = async function(propiedadId, personaId)
{
    const prop = await models.Propiedad.findByPk(propiedadId);
    const persona = await models.Persona.findByPk(personaId);

    await prop.addPropietarios(persona);

    return await models.Propietario.findAll();
}

const update = async function(id, propiedadId, personaId)
{
    let propietarioModificado = {
        propiedadId: propiedadId,
        personaId: personaId,
        updatedAt: new Date()
    };

    await models.Propietario.update(propietarioModificado, {
        where: {
            id: id
        }
    });

    return await models.Propietario.findAll();
}

const deleteById = async function(id)
{
    await models.Propietario.destroy({
        where: {
            id: id
        }
    });

    return await models.Propietario.findAll();
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;