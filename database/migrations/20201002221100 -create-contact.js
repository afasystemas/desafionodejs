'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contact', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emailid: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Email',
          key: 'id'
        }
      },
      phoneid: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Phone',
          key: 'id'
        }
      },
      websiteid: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Website',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contact');
  }
};