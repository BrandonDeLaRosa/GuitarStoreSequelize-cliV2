'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('Teachers','location', {
      type: Sequelize.STRING,
      defaultValue:'Not provided'
     })
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Teachers', 'location', {  //! En caso de que no funcione la db se elimina lo que hay en up y todo se queda como al crear el modelo.
    })
  
  }
};
