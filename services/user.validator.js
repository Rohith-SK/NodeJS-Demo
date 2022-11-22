const { statusResponses } = require("../util/static.util");
const { isEmptyObj, ValidateEmail } = require("../util/tools.util");

exports.userRegisterValidator = (req, res, next) => {
  try {
    console.log(req.body);
    const { name, email, userName, phoneNumber, password } = req.body;
    if (isEmptyObj(req.body)) throw statusResponses.BAD_RQST;

    if (!name || name.length < 3 || name.length > 50)
      throw { ...statusResponses.BAD_RQST, messsage: "Invalid name" };

    if (!email || ValidateEmail(email))
      throw { ...statusResponses.BAD_RQST, messsage: "Invalid email" };

    if (!userName || userName.length < 3 || name.userName > 50)
      throw { ...statusResponses.BAD_RQST, messsage: "Invalid username" };

    if (!phoneNumber || phoneNumber.length != 10)
      throw { ...statusResponses.BAD_RQST, messsage: "Invalid phone number" };

    if (!password || password.length < 3 || password.length > 50)
      throw { ...statusResponses.BAD_RQST, messsage: "Invalid password" };
    next();
  } catch (error) {
    console.log(error);
  }
};
