const models = require('../models');
const logs = require('../../app/Utils/LogUtil');

class StreetDAO {

  static findOrCreate(street) {
    return models.Street.findOne(
      {
        where: {
          name: street.name,
          cityid: street.cityid
        }
      })
      .then(streetReturned => {
        if (streetReturned) {
          return streetReturned;
        } else {
          return street.save();
        }
      }).catch(function (err) {
        logs.createError("class StreetDAO - Method findOrCreate - Erro =>"+ err.message);
      });
  }

}

module.exports = StreetDAO;
