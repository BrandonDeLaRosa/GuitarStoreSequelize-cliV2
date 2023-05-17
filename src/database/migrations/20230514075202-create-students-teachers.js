'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentsTeachers', {
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
      teachersId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Teachers",
          key:"id"
        },
        field:"teacher_id"
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
    await queryInterface.dropTable('StudentsTeachers');
  }
};