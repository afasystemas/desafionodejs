'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'company_unique'
    },
    catchPhrase:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    bs: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: 'company_unique'
    },
  },
    {freezeTableName: true},
    {timestamps: false},
    {indexes:[
        {
          unique: true,
          fields: ['name', 'bs']
        }
      ]
    });
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};