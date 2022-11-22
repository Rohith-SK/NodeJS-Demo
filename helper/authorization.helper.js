const {
  getUserEmail,
  getUserName,
  getUserPhoneNumber,
} = require("../services/dbFetch.service");

exports.isEmailExist = async (email) => {
  const data = await getUserEmail(email);
  return data ? true : false;
};

exports.isUsernameExit = async (email) => {
  const data = await getUserName(email);
  return data ? true : false;
};

exports.isPhoneNumberExist = async (email) => {
  const data = await getUserPhoneNumber(email);
  return data ? true : false;
};

exports.userRegister = async ({
  name,
  email,
  phoneNumber,
  userName,
  password,
}) => {
  try {
    const data = await userCreation({
      name,
      email,
      phoneNumber,
      userName,
      password,
    });
    if (!data) throw new Error(`error occured while on creation`);
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
