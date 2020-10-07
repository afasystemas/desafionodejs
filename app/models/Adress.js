'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      streetid: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'Street',
          key: 'id'
        }
      },
      suite: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipcodeid: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      geoCodeid: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {freezeTableName: true},
    {timestamps: false});
  Address.associate = function (models) {
    Address.belongsTo(models.Street, {
      foreignKey: 'streetid',
      as: 'street'
    });
    Address.belongsTo(models.Zipcode, {
      foreignKey: 'zipcodeid',
      as: 'zipcode'
    });
    Address.belongsTo(models.Geo, {
      foreignKey: 'geoCodeid',
      as: 'geo'
    });
  };
  return Address;
};