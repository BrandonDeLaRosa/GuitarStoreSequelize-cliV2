'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sales.belongsTo(models.SchoolAdmin,{ foreignKey: "schoolAdminId"});
      Sales.hasMany(models.SalesProducts,{ foreignKey: "saleId"})
    }
  }
  Sales.init({
    id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    
    client: {
      type:DataTypes.STRING(25),
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false
    },
    phone: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    location: {
      type:DataTypes.TEXT,
      allowNull:false
    },
    schoolAdminId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      field: "school_admin_id"
    },
  
  }, {
    sequelize,
    modelName: 'Sales',
  });
  return Sales;
};