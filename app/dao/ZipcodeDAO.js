const models = require('../models');
const logs = require('../../app/Utils/LogUtil');
class ZipcodeDAO {

  static findOrCreate(zipcode) {
    return models.Zipcode.findOne(
      {
        where: {
          codenumber: zipcode.codenumber
        }
      })
      .then(zipcodeReturned => {
        if (zipcodeReturned) {
          return zipcodeReturned;
        } else {
          return zipcode.save();
        }
      }).catch(function (err) {
        logs.createError("class ZipcodeDAO - Method findOrCreate - Erro =>"+ err.message);
      });
  }

}

module.exports = ZipcodeDAO;
