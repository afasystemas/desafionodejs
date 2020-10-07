var models = require('../models');
var logs = require('../Utils/LogUtil');

class WebsiteDAO {

  static findOrCreate(website) {
    return models.Website.findOne(
      {
        where: {
          website: website.website
        }
      })
      .then(websiteReturned => {
        if (websiteReturned) {
          return websiteReturned;
        } else {
          return website.save();
        }
      }).catch(function (err) {
        logs.createError("class WebsiteDAO - Method findOrCreate - Erro =>"+ err.message);
      });
  }

}

module.exports = WebsiteDAO;
