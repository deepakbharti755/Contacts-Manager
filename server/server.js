const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.CONNECTION)
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 3001, (err) => {
  if (!err) {
    console.log(`server is running at port ${process.env.PORT}`);
  } else {
    console.log(err);
  }
});
