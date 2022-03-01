const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_DB_URI, {})
    .then(() => {
      console.log("Connection to database is successful");
    })
    .catch((err) => {
      console.log("Couldn't connect to database'");
      console.log(`Error: ${err.message}`);
    });
};
