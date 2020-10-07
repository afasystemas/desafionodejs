const models = require('../models');
const logs = require('../Utils/LogUtil');
class ContactDAO {

  static findOrCreate(contact) {
    return models.Contact.findOne(
      {
        where: {
          emailid:   contact.emailid,
          phoneid:   contact.phoneid,
          websiteid: contact.websiteid
        }
      })
      .then(contactReturned => {
        if (contactReturned) {
          return contactReturned;
        } else {
          return contact.save();
        }
      }).catch(function (err) {
        logs.createError("class ContactDAO - Method findOrCreate - Erro =>"+ err.message);
        return null;
      });
  }

}

module.exports = ContactDAO;
