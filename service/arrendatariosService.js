const models = require('../models');

const getAll = async function()
{    
    return await models.Arrendatario.findAll();
}

const getById = async function(id)
{
    return await models.Arrendatario.findAll({
        where: {
            id: id
        }
    });
}

const add = async function(propiedadId, personaId)
{
    const prop = await models.Propiedad.findByPk(propiedadId);
    const persona = await models.Persona.findByPk(personaId);

    await prop.addArrendatarios(persona);

    return await models.Arrendatario.findAll();
}

const update = async function(id, propiedadId, personaId)
{
    let arrendatarioModificado = {
        propiedadId: propiedadId,
        personaId: personaId,
        updatedAt: new Date()
    };

    await models.Arrendatario.update(arrendatarioModificado, {
        where: {
            id: id
        }
    });

    return await models.Arrendatario.findAll();
}

const deleteById = async function(id)
{
    await models.Arrendatario.destroy({
        where: {
            id: id
        }
    });

    return await models.Arrendatario.findAll();
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;