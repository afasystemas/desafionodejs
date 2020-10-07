'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Street', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false,
        unique: 'street_city_unique'
      },
      cityid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'City',
          key: 'id'
        },
        unique: 'street_city_unique'
      }
    }, {
      uniqueKeys: {
        phone_unique:{
          fields: ['name', 'cityid']
        }
      }
    }
  ).then(function() {
      return queryInterface.sequelize.query(
        "ALTER TABLE Street ADD CONSTRAINT street_city_unique UNIQUE (name, cityid)"
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Street');
  }
};