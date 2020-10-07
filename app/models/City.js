'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
      id: {
          type: DataTypes.INTEGER,
          unique: true,
          autoIncrement: true,
          primaryKey: true,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
  },
      {freezeTableName: true},
      {timestamps: false});
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};