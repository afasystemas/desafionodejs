'use strict';
module.exports = (sequelize, DataTypes) => {
  const Website = sequelize.define('Website', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    website:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
    {freezeTableName: true},
    {timestamps: false});
  Website.associate = function(models) {};
  return Website;
};