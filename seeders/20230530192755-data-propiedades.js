'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */
     await queryInterface.bulkInsert('Propiedades',
      [
        {
          cve_catastral: 'LM-20-102',
          descripcion: 'Casa café de 300m2',
          direccion: "Periferico Sur No. 5530 Col. Pedregal de Carrasco",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cve_catastral: 'XA-03-008',
          descripcion: 'Casa amarilla de 400m2',
          direccion: "Av. Canal de Miramontes No. 3122 Local 110, Col. Residencial Acoxpa, Del. Tlalpan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cve_catastral: 'MZ-43-053',
          descripcion: 'Casa verde de 350m2',
          direccion: "Av. Puebla No. 1188 Loc. C Col. A. Pantitlan",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
