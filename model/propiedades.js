const propiedades = [
    {
        id: 1,
        clave_catastral: 'LM-20-102',
        descripcion: 'Casa café de 300m2',
        id_arrendatario: 1
    },
    {
        id: 2,
        clave_catastral: 'XA-03-008',
        descripcion: 'Casa amarilla de 400m2',
        id_arrendatario: 1
    },
    {
        id: 3,
        clave_catastral: 'MZ-43-053',
        descripcion: 'Casa verde de 350m2',
        id_arrendatario: 2
    }
];

function getAll()
{
    return propiedades;
}

function getById(id)
{
    let p = propiedades.find(p => p.id == id);

    if (p == null) {
        p = { error: `Propiedad con id ${id} no encontrada` };
    }

    return p;
}

function getPropiedadesByIdArrendatario(id_arrendatario)
{
    let propiedadesArrendadas = [];

    for (let p of propiedades)
    {
        if (p.id_arrendatario == id_arrendatario)
        {
            propiedadesArrendadas.push(p);
        }
    }

    if (propiedadesArrendadas.length)
    {
        return propiedadesArrendadas;
    }
    else
    {
        return { error: `El arrendatario con id ${id_arrendatario} no existe o no arrienda propiedades` };
    }
}

function add(clave_catastral, descripcion, id_arrendatario)
{
    let last = propiedades.slice(-1)[0];

    let newItem = {
        id: last != null ? last.id + 1 : 1,
        clave_catastral: clave_catastral,
        descripcion: descripcion,
        id_arrendatario: id_arrendatario ? parseInt(id_arrendatario) : null
    };

    propiedades.push(newItem);

    return propiedades;
}

function update(id, newClaveCatastral, newDescripcion, newIDArrendatario)
{
    let p = getById(id);

    if (p.id != null)
    {
        let indexOfP = propiedades.indexOf(p);
        p.clave_catastral = newClaveCatastral || p.clave_catastral;
        p.descripcion = newDescripcion || p.descripcion;
        p.id_arrendatario = parseInt(newIDArrendatario) || p.id_arrendatario;
        propiedades[indexOfP] = p;

        return propiedades;
    }
    else
    {
        return p;
    }
}

function deleteById(id)
{
    if (!propiedades.length)
    {
        return { error: 'No hay propiedades registradas' };
    }
    
    let p = getById(id);

    if (p.id != null)
    {
        let indexOfP = propiedades.indexOf(p);
        propiedades.splice(indexOfP, 1);
        
        return propiedades;
    }
    else
    {
        return p;
    }
}

function deleteAll()
{
    if (propiedades.length)
    {
        propiedades.length = 0;
        
        return { resultado: 'Propiedades eliminadas correctamente' };
    }
    else
    {
        return { error: 'No hay propiedades registradas' };
    }
}

module.exports.default = propiedades;
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.getPropiedadesByIdArrendatario = getPropiedadesByIdArrendatario;
module.exports.add = add;
module.exports.update = update;
module.exports.deleteById = deleteById;
module.exports.deleteAll = deleteAll;