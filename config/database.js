const fs = require('fs');

module.exports = {
    "development": {
        "username": "andrefa",
        "password": "root",
        "database": "desafionodejs",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "quoteIdentifiers": false,
        "freezeTableName": true,
        "logging": false,
        "define": {
            timestamps: false
        },
      "apikey": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkwODM4NDY0LCJleHAiOjE1OTA4Mzg3NjR9.XNQ4mnoQubLB7rQyFQdZqG4Gl9avgWUEwGFxD60iTfc'
    // "timezone": 'America/Sao_Paulo'
  },
  "test": {
    "username": "andrefa",
    "password": "root",
    "database": "desafionodejs",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  },
  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_production",
  //   "host": "127.0.0.1",
  //   "dialect": "postgresql"
  // }
}
