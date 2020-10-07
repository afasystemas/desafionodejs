const models = require('../models');
const logs = require('../../app/Utils/LogUtil');
class AddressDAO {

  static findOrCreate(address) {
    return models.Address.findOne(
      {
        where: {
          streetid: address.streetid,
          suite: address.suite,
          zipcodeid: address.zipcodeid,
          geoCodeid: address.geoCodeid
        }
      })
      .then(cityReturned => {
        if (cityReturned) {
          return cityReturned;
        } else {
          return address.save();
        }
      }).catch(function (err) {
        logs.createError("class AddresslDAO - Method findOrCreate - Erro =>"+ err.message);
      });
  }

}

module.exports = AddressDAO;
