'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SchoolAdmins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING(30),
        
      },
      lastname: {
        type: Sequelize.STRING(30),
        allowNull:false
      },
      username: {
        type: Sequelize.STRING(30),
        // allowNull:false
      },
      email: {
        type: Sequelize.STRING(70),
        allowNull:false
      },
      password: {
        type: Sequelize.STRING(),
        allowNull:false
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
    await queryInterface.dropTable('SchoolAdmins');
  }
};