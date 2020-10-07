'use strict';
module.exports = (sequelize, DataTypes) => {
  const Zipcode = sequelize.define('Zipcode', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    codenumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
    {freezeTableName: true},
    {timestamps: false});
  Zipcode.associate = function(models) {
    // associations can be defined here
  };
  return Zipcode;
};