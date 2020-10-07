const express = require('express');
const router = express.Router();
const request = require("request");
const userBO = require('../lib/BO/UserBO');
const logs = require('../../app/Utils/LogUtil');
const models = require('../models');
const emailDAO = require('../dao/EmailDAO');

router.get('/save', async function (req, res) {

  try {
    const options = {
      url: 'https://jsonplaceholder.typicode.com/users'
    };

    let dataApi = await new Promise(
      (resolve, reject) => {
        request.get(options,
          async (error, response, body) => {
            if (error) {
              logs.createError(error.message);
            }
            resolve(response.body);
          });
      }
    );
    let listUsersApi = JSON.parse(dataApi);
    logs.LogRequest(req.connection.remoteAddress +' '+ 'user/save'+' - save datas => '+ JSON.stringify(listUsersApi));
    const result = await userBO.createOrUpdate(listUsersApi);
    result.then(data=>{
      res.json({success: data});
    }).catch(function (err) {
      res.json({success: false});
    });

  }catch (e) {
    res.json({success:false});
  }

});

module.exports = router;
