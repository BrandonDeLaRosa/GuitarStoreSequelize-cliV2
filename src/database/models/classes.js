'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classes.hasMany(models.StudentsClasses,{foreignKey: "classesId"})
      Classes.belongsTo(models.SchoolAdmin,{foreignKey:"schoolAdminId"})
      Classes.belongsTo(models.Teachers,{ foreignKey:"teacherId"})
    }
  }
  Classes.init({
    id: 
    {
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    name: 
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    description: 
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    available: 
    {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    },
    schoolAdminId: 
    {
      type:DataTypes.INTEGER,
      allowNull:false,
      field: "school_admin_id"
    },
    teacherId: 
    {
      type:DataTypes.INTEGER,
      allowNull:false,
      field: "teacher_id"
    },
  }, {
    sequelize,
    modelName: 'Classes',
  });
  return Classes;
};