'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SchoolAdmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SchoolAdmin.hasMany(models.Teachers,{foreignKey: 'schoolAdminId'});
      SchoolAdmin.hasMany(models.Students, {foreignKey:'schoolAdminId'});
      SchoolAdmin.hasMany(models.Classes, {foreignKey: 'schoolAdminId'});
      SchoolAdmin.hasMany(models.Sales, {foreignKey:   'schoolAdminId'});
      SchoolAdmin.hasMany(models.Products, {foreignKey:'schoolAdminId'});
    }
  }
  SchoolAdmin.init({
    id: {
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER,
    },
    firstname: {
      type:DataTypes.STRING(30),
      allowNull:false
    },
    lastname: {
      allowNull:false,
      type: DataTypes.STRING(30)
    },
    username: {
      // allowNull:false,
      type: DataTypes.STRING(30)
    },
    email: {
      allowNull:false,
      type: DataTypes.STRING(70)
    },
    password: {
      allowNull:false,
      type: DataTypes.STRING(30)
    }
  }, {
    sequelize,
    modelName: 'SchoolAdmin',
  });
  return SchoolAdmin;
};