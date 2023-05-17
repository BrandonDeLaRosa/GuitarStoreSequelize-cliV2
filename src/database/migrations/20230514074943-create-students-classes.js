'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentsClasses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentsId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Students",
          key:"id"
        },
        field:"students_id"
      },
      classesId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Classes",
          key:"id"
        },
        field:"classes_id"
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
    await queryInterface.dropTable('StudentsClasses');
  }
};