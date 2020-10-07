'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    emailid:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Email',
        key: 'id'
      }
    },
    phoneid:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Phone',
        key: 'id'
      }
    },
    websiteid:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Website',
        key: 'id'
      }
    },
  },
    {freezeTableName: true},
    {timestamps: false});
  Contact.associate = function(models) {
    Contact.belongsTo(models.Email, {
      foreignKey: 'emailid',
      as: 'email'
    });
    Contact.belongsTo(models.Phone, {
      foreignKey: 'phoneid',
      as: 'phone'
    });
    Contact.belongsTo(models.Website, {
      foreignKey: 'websiteid',
      as: 'website'
    });
  };
  return Contact;
};