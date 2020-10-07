'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      streetid: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Street',
          key: 'id'
        }
      },
      suite: {
        type:Sequelize.STRING,
        allowNull:false
      },
      zipcodeid: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Zipcode',
          key: 'id'
        }
      },
      geoCodeid: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Geo',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Address');
  }
};