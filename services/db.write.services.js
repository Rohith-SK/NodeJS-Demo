const userModel = require("../model/user.model");

exports.userCreation = (data) => new userModel(data).save();
