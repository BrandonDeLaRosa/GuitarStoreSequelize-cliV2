const bcrypt = require('bcrypt')

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
      type: DataTypes.STRING()
    }
  }, {
    sequelize,
    modelName: 'SchoolAdmin',
    hooks:{
      beforeCreate: async (admin) => {
        try {
          const salt = await bcrypt.genSalt(10)
          const passwordHash = await bcrypt.hash(admin.password, salt)
          admin.password = passwordHash
        } catch (error) {
          throw error
        }
      }
    }
  });
  return SchoolAdmin;
};