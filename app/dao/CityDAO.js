const models = require('../models');
const logs = require('../../app/Utils/LogUtil');
class CityDAO {

  static findOrCreate(city) {
    return models.City.findOne(
      {
        where: {
          name: city.name
        }
      })
      .then(cityReturned => {
        if (cityReturned) {
          return cityReturned;
        } else {
          return city.save();
        }
      }).catch(function (err) {
        logs.createError("class CityDAO - Method findOrCreate - Erro =>"+ err.message);
      });
  }

}

module.exports = CityDAO;
