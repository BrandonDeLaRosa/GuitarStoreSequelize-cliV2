'use strict';
const {
  Model
} = require('sequelize');
const sales = require('./sales');
module.exports = (sequelize, DataTypes) => {
  class SalesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SalesProducts.belongsTo(models.Products, {foreignKey:"productId"})
      SalesProducts.belongsTo(models.Sales, {foreignKey:"saleId"})
    }
  }
  SalesProducts.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    saleId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    productId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    quantity: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type:DataTypes.FLOAT,
      allowNull: false
    }
    }, {
    sequelize,
    modelName: 'SalesProducts',
  });
  return SalesProducts;
};