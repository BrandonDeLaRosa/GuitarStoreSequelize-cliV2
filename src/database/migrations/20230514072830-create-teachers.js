'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING(25),
        allowNull:false
      },
      lastname: {
        type: Sequelize.STRING(25),
        allowNull:false
      },
      img:{
        type: Sequelize.STRING,
      },
      schoolAdminId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'SchoolAdmins',
          key:'id'
        },
        onDelete:'SET NULL', 
        onUpdate: 'CASCADE',
        field:"school_admin_id" 
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
    await queryInterface.dropTable('Teachers');
  }
};