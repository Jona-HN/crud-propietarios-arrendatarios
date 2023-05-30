'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Persona.belongsToMany(models.Propiedad, {
        through: models.Propietario,
        as: "propiedades"
      })
      models.Persona.belongsToMany(models.Propiedad, {
        through: models.Arrendatario,
        as: "arrendatarios"
      })
    }
  }
  Persona.init({
    rfc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};