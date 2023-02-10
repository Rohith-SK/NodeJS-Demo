const {
  userRegister,
  isEmailExist,
  isUsernameExit,
  isPhoneNumberExist,
} = require("../helper/authorization.helper");
const { statusResponses } = require("../util/static.util");
const { responseSuccess, encryptPassword } = require("../util/tools.util");

exports.userRegisterController = async (req, res) => {
  try {
    console.log(req.body);
    const { email, username, phoneNumber, password } = req.body;
    const [emailExist, usernameExit, phoneNumberExist] = await Promise.all([
      isEmailExist(email),
      isUsernameExit(username),
      isPhoneNumberExist(phoneNumber),
    ]);

    if (emailExist)
      throw { ...statusResponses.DATA_EXIST, message: `Email already exist` };
    if (usernameExit)
      throw {
        ...statusResponses.DATA_EXIST,
        message: `Username already exist`,
      };
    if (phoneNumberExist)
      throw {
        ...statusResponses.DATA_EXIST,
        message: `Phone number already exist`,
      };
    const [reg_err, reg_succ] = await userRegister({
      ...req.body,
      password: encryptPassword(password),
    });

    if (reg_err) throw statusResponses.CREATION_FAILED;

    return responseSuccess(res, statusResponses.SUCC_MSG);
  } catch (error) {
    console.log(error);
  }
};
