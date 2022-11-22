const express = require("express");
const { userRegisterController } = require("./controller/user.controller");
const { dbConnection } = require("./services/db.services");
const { userRegisterValidator } = require("./services/user.validator");
require("dotenv").config();

const routerPage = require("./router/index.router");

const app = express();

app.use(express.json());
app.use("/", routerPage);

const port = process.env.PORT || 5000;

dbConnection();

app.listen(port, () => {
  console.log("Server running on port 3000");
});
