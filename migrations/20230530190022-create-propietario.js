'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Propietarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // Llave foránea de la tabla Personas
      personaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Personas',
          key: 'id'
        } 
      },
      // Llave foránea de la tabla Propiedades
      propiedadId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Propiedades',
          key: 'id'
        } 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Propietarios');
  }
};