const models = require('../models');
const logs = require('../../app/Utils/LogUtil');
class EmailDAO {

  static findOrCreate(email) {
    return models.Email.findOne(
      {
        where: {
          email: email.email
        }
      })
      .then(emailReturned => {
        if (emailReturned) {
          return emailReturned;
        } else {
          return email.save();
          // return email.save();
        }
      }).catch(function (err) {
        logs.createError("class EmailDAO - Method findOrCreate - Erro =>"+ err.message);
        throw new Error(err.message);
      });
  }

}

module.exports = EmailDAO;
