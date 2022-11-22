const bcrypt = require("bcrypt");

exports.isEmptyObj = (obj) => {
  for (let x in obj) {
    if (obj.hasOwnProperty(x)) return false;
  }
  return true;
};

exports.ValidateEmail = (email) => {
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

exports.responseSuccess = (res, msg) => {
  const response =
    typeof msg == "object"
      ? msg
      : {
          message: msg || "Success",
        };
  return res.status(msg?.status || 200).json(response);
};

exports.encryptPassword = (pwd) => bcrypt.hashSync(pwd, 10);
