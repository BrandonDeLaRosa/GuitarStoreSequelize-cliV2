'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(25),
        allowNull:false
      },
      description: {
        type: Sequelize.STRING,
        allowNull:false
      },
      available: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:true
      },
      schoolAdminId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'SchoolAdmins',
          key:'id'
        },
        field:"school_admin_id"
      },
      teacherId: {
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
    await queryInterface.dropTable('Classes');
  }
};