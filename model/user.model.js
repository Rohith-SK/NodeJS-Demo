const mongoose = require("mongoose");
const { STATICDATA } = require("../util/static.util");

const userModel = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  userName: {
    type: String,
    trim: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  confirmPassword: {
    type: String,
    trim: true,
  },
  isEmailVerified: {
    type: Boolean,
  },
  isPhoneVerified: {
    type: Boolean,
  },
  status: {
    type: String,
    enum: STATICDATA.status,
    default: "Active",
  },
});

module.exports = mongoose.model("userModel", userModel);
