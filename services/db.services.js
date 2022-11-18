const mongoose = require("mongoose");

exports.dbConnection = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DBNAME}`),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 10,
        connectTimeoutMS: 10000,
        bufferCommands: false,
      };
    console.log("Db Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
