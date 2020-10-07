'use strict';
module.exports = (sequelize, DataTypes) => {
  const Street = sequelize.define('Street', {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'street_city_unique'
      },
      cityid: {
        type: DataTypes.INTEGER,
        references: {
          model: 'City',
          key: 'id'
        },
        unique: 'street_city_unique'
      }
    },
      {freezeTableName: true},
      {timestamps: false},
      {indexes:[
          {
            unique: true,
            fields: ['name', 'cityid']
          }
        ]
      }
  );
  Street.associate = function(models) {
    Street.belongsTo(models.City, {
      foreignKey: 'cityid',
      as: 'city'
    });
  };
  return Street;
};