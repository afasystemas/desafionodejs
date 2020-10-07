const models = require('../models');
const logs = require('../../app/Utils/LogUtil');

class PhoneDAO {

  static findOrCreate(phone) {
    return models.Phone.findOne(
      {
        where: {
          phonenumber: phone.phonenumber
        }
      })
      .then(phoneReturned => {
        if (phoneReturned) {
          return phoneReturned;
        } else {
          return phone.save();
        }
      }).catch(function (err) {
        logs.createError("class PhoneDAO - Method findOrCreate - Erro =>"+ err.message);
      });
  }

}

module.exports = PhoneDAO;
