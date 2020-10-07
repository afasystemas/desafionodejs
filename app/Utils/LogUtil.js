const fs = require("fs");
const path    = require("path");
const pathFileLog = path.join(__dirname, '..', '..')+"/_log/_log.txt";
const pathFileLogEvent = path.join(__dirname, '..', '..')+"/_log/_log_event.txt";

class LogUtil {
  static createError(errorMgs) {
    fs.appendFile(pathFileLog, '\n'+this.getTimestampNow() +' - '+errorMgs ,(err) => {
      if (err) console.log(err);
    });
  }
  static LogRequest(mgsLog) {

    fs.appendFile(pathFileLogEvent, '\n'+this.getTimestampNow() +' '+mgsLog,(err) => {
      if (err) console.log(err);
    });
  }
  static getTimestampNow(){
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
  }

}

module.exports = LogUtil;
