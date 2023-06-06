'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
    */
    await queryInterface.bulkInsert('Personas',
      [
        {
          rfc: 'PESP770826HCSNTB64',
          nombre: 'Pablo Pena Soto',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rfc: 'VARM770826MNTLYR12',
          nombre: 'María Luisa Valdez Reyes',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rfc: 'AARF770826HCHLVR76',
          nombre: 'Francisco Javier Álvarez Rivera',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rfc: 'RIMD770826HQTSRN37',
          nombre: 'Daniel Rios Moreno',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rfc: 'CAGJ770826HMCHTS69',
          nombre: 'José Guadalupe Chavez Gutiérrez',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          rfc: 'MAGR770826HBSRTB79',
          nombre: 'Rubén Martínez Gutiérrez',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
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
