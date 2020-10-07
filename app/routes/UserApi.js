const express = require('express');
const router = express.Router();
const request = require("request");
const logs = require('../../app/Utils/LogUtil');

router.get('/consume', async function (req, res) {

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
    let result = JSON.parse(dataApi);
  logs.LogRequest(req.connection.remoteAddress +' '+ 'api/consume'+ '- data from api=> '+ JSON.stringify(result));
  res.json(result);
});

module.exports = router;
