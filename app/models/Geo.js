'use strict';
module.exports = (sequelize, DataTypes) => {
  const Geo = sequelize.define('Geo', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    lat:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'geo_unique'
    },
    lng:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'geo_unique'
    }
  },
    {freezeTableName: true},
    {timestamps: false},
    {indexes:[
        {
          unique: true,
          fields: ['lat', 'lng']
        }
      ]
    }
    );
  Geo.associate = function(models) {};
  return Geo;
};