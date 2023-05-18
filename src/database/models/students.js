'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Students.belongsTo(models.SchoolAdmin,{foreignKey:"schoolAdminId"})
      Students.hasMany(models.StudentsClasses, {foreignKey: 'studentsId'});
      Students.hasMany(models.StudentsTeachers, {foreignKey:'studentsId'});
    }
  }
  Students.init({
    id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
  },
    firstname: {
      type:DataTypes.STRING(25),
      allowNull:false
    },
    lastname: {
      type:DataTypes.STRING(25),
      allowNull:false     
    },
    age: {
      type:DataTypes.INTEGER,
      allowNull:false     
    },
    location: {
      type:DataTypes.STRING,
      allowNull:false   
    },
    img: {
      type:DataTypes.STRING
    },
    schoolAdminId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      field:"school_admin_id"
    }
  }, {
    sequelize,
    modelName: 'Students',
  });
  return Students;
};