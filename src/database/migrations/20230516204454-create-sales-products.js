'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalesProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      saleId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model:"Sales",
          key:"id"
        },
        field:'sale_id'
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model:"Products",
          key:"id"
        },
        field:"product_id"
      },
      quantity:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      price:{
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('SalesProducts');
  }
};