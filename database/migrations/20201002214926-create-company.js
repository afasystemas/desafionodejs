'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Company', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:  {
        type:Sequelize.STRING,
        allowNull:false
      },
      catchPhrase:  {
        type:Sequelize.STRING,
        allowNull:true
      },
      bs:  {
        type:Sequelize.STRING,
        allowNull:true
      }
    },{
      uniqueKeys: {
        company_unique:{
          fields: ['name', 'bs']
        }
      }
    }).then(function() {
      return queryInterface.sequelize.query(
        "ALTER TABLE Company ADD CONSTRAINT company_unique UNIQUE (name, bs)"
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Company');
  }
};