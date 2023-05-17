'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.changeColumn('Classes', 'description', {
       type:Sequelize.TEXT,  //! Agregar a la columna todos los attributos y sus restricciones exactas, si se omite algo que si esta en el modelo, se omitira.
       allowNull:false
      });
     
  },

  async down (queryInterface, Sequelize) {
    // !Si por altgun motivo, la db falla, con down regresamos a un valor previo.
   await queryInterface.changeColumn('Classes', 'description',{
    type:Sequelize.STRING,
    allowNull:false
   });
    
  }
};
