const express = require("express");
const { userRegisterController } = require("../controller/user.controller");
const { userRegisterValidator } = require("../services/user.validator");
const { registerJoiValidator } = require("../services/user.validator.joi");

const app = express();

app.post("/userRegister", registerJoiValidator, userRegisterController);

module.exports = app;
