const express = require("express");
const { userRegisterController } = require("../controller/user.controller");
const { userRegisterValidator } = require("../services/user.validator");

const app = express();

app.post("/userRegister", userRegisterValidator, userRegisterController);

module.exports = app;
