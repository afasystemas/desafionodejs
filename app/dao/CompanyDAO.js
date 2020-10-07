const models = require('../models');
const logs = require('../../app/Utils/LogUtil');

class CompanyDAO {

  static findOrCreate(company) {
    return models.Company.findOne(
      {
        where: {
          name: company.name,
          bs: company.bs
        }
      })
      .then(companyReturned => {
        if (companyReturned) {
          return companyReturned;
        } else {
          return company.save();
        }
      }).catch(function (err) {
        logs.createError("class CompanyDAO - Method findOrCreate - Erro =>"+ err.message);
      });
  }

}

module.exports = CompanyDAO;
