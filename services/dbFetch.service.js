const userModel = require("../model/user.model");

exports.getUserEmail = async (email) => userModel.findOne({ email });
exports.getUserPhoneNumber = async (phoneNumber) =>
  userModel.findOne({ phoneNumber });
exports.getUserName = async (userName) => userModel.findOne({ userName });
