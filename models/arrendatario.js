'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Arrendatario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Arrendatario.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    personaId: DataTypes.INTEGER,
    propiedadId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Arrendatario',
  });
  return Arrendatario;
};