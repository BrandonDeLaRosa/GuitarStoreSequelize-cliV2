'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsTo(models.SchoolAdmin, {foreignKey: "schoolAdminId"});
      Products.hasMany(models.SalesProducts,{ foreignKey: "productId"})
    }
  }
  Products.init({
    id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    description: {
      type:DataTypes.TEXT,
      allowNull:false
    },
    price: {
      type:DataTypes.FLOAT,
      allowNull:false
    },
    quantity: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    img: {
      type:DataTypes.STRING,
      // allowNull:false
    },
    available: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    },
    schoolAdminId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      field:"school_admin_id"
    },
    
    }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};