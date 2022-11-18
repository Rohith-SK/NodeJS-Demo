const express = require("express");
const { dbConnection } = require("./services/db.services");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

dbConnection();

app.listen(port, () => {
  console.log("Server running on port 3000");
});
