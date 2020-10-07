const models = require('../models');
const logs = require('../../app/Utils/LogUtil');

class GeoDAO {

  static findOrCreate(geo) {
    return models.Geo.findOne(
      {
        where: {
          lat: geo.lat,
          lng: geo.lng
        }
      })
      .then(geoReturned => {
        if (geoReturned) {
          return geoReturned;
        } else {
          return geo.save();
        }
      }).catch(function (err) {
        logs.createError("class GeoDAO - Method findOrCreate - Erro =>"+ err.message);
      });
  }

}

module.exports = GeoDAO;
