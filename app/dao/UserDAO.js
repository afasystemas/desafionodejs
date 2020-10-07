const models = require('../models');
const logs = require('../Utils/LogUtil');
class UserDAO {


  static createOrUpdateDataFromApi(userapp) {
    return models.Userapp.findOne(
      {
        where: {
          id: userapp.id
        }
      })
      .then(async userFinded => {
        if (userFinded) {
          return models.Userapp.update(userapp,
            {where: {id: userapp.id}
            }
          );
        } else {
          return userapp.save();
        }
      }).catch(function (err) {
        if(!err.message == 'Query was empty'){
          //TODO escrever logs
          logs.createError("class UsuarioDAO - Method creeateOrUpdateDataFromApi - Erro =>"+ err.message);
          return null;
        }
      });
  }

}

module.exports = UserDAO;
