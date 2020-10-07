const fs = require("fs");
const express = require('express');
const app = express();
const path    = require("path");
var config = require('../config/database');

const interceptor = function interceptor(req, res, next){
  if(req.headers.apikey === config.development.apikey){
    next();
  }
  else{
    res.send('Not authorized!');
  }
};

app.use(interceptor) ;
app.use(express.json()) ;
const pathFileLog = path.join(__dirname, '..')+"/_log/_log.txt";
const pathFileLogEvent = path.join(__dirname, '..')+"/_log/_log_event.txt";
const pathLogDir = path.join(__dirname, '..')+"/_log/";

if (!fs.existsSync(pathLogDir)) {
  fs.mkdirSync(pathLogDir);
}
if(!fs.existsSync(pathFileLog)){
  fs.writeFile(pathFileLog, 'Error\'s Log', (err) => {
    if (err) logs.createError(err.message);
  });
}
if(!fs.existsSync(pathFileLogEvent)){
  fs.writeFile(pathFileLogEvent, 'Event\'s Log', (err) => {
    if (err) logs.createError(err.message);
  });
}

app.use('/api', require('./routes/UserApi'));
app.use('/user', require('./routes/UserRoutes'));
app.get('*', function(req, res){
  res.send('Not Found', 404);
});

// models.sequelize.sync().then(function () {
//   console.log('DB Synchronized!!!');
// });

app.listen(3000, function () {
  // console.log('DesafioNodejs listening on port 3000!');
});
// console.log('Server running at http://127.0.0.1:3000/');
module.exports =  app;
