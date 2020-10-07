'use strict';
module.exports = (sequelize, DataTypes) => {
  const Phone = sequelize.define('Phone', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    phonenumber:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  },
    {freezeTableName: true},
    {timestamps: false});
  Phone.associate = function(models) {};
  return Phone;
};