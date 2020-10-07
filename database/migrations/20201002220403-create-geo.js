'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Geo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lat: {
        type:Sequelize.STRING,
        allowNull:false
      },
      lng:{
        type:Sequelize.STRING,
        allowNull:false
      }
    }, {
        uniqueKeys: {
          phone_unique:{
            fields: ['lat', 'lng']
          }
        }
      }
    ).then(function() {
      return queryInterface.sequelize.query(
        "ALTER TABLE Geo ADD CONSTRAINT geo_unique UNIQUE (lat, lng)"
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Geo');
  }
};