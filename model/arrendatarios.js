const arrendatarios = [
    {
        id: 1,
        rfc: 'RIMD770826HQTSRN37',
        nombre: 'Daniel Rios Moreno',
    },
    {
        id: 2,
        rfc: 'CAGJ770826HMCHTS69',
        nombre: 'José Guadalupe Chavez Gutiérrez',
    },
    {
        id: 3,
        rfc: 'MAGR770826HBSRTB79',
        nombre: 'Rubén Martínez Gutiérrez',
    }
];

function getAll()
{
    return arrendatarios;
}

function getById(id)
{
    let a = arrendatarios.find(a => a.id == id);

    if (a == null) {
        a = { error: `Arrendatario con id ${id} no encontrado` };
    }

    return a;
}

module.exports.default = arrendatarios;
module.exports.getAll = getAll;
module.exports.getById = getById;