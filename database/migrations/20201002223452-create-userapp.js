'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Userapp', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      username: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      addressid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Address',
          key: 'id'
        }
      },
      companyid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Company',
          key: 'id'
        }
      },
      contactid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Contact',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Userapp');
  }
};