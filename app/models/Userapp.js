'use strict';
module.exports = (sequelize, DataTypes) => {
  const Userapp = sequelize.define('Userapp', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
      username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Address',
        key: 'id'
      }
    },
    companyid:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Company',
        key: 'id'
      }
    },
      contactid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Contact',
          key: 'id'
        }
      },
  },
    {freezeTableName: true},
    {timestamps: false});
  Userapp.associate = function(models) {
    Userapp.belongsTo(models.Address, {
      foreignKey: 'addressid',
      as: 'address'
    });
    Userapp.belongsTo(models.Company, {
      foreignKey: 'companyid',
      as: 'company'
    });
    Userapp.belongsTo(models.Contact, {
      foreignKey: 'contactid',
      as: 'contact'
    });

  };
  return Userapp;
};