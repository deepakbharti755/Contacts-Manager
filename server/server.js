const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const ContactsController = require("./User/Routes/ContactsRoute");
const UserController = require("./User/Routes/UserRoute");
const routes = ["/user/login", "/user/signup"];
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use((req, res, next) => {
  if (routes.includes(req.url)) {
    next();
  } else {
    const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
    req.body.userdata = user;
    next();
  }
});

mongoose
  .connect(
    "mongodb+srv://Akshith:akshith123@cluster0.klllr.mongodb.net/Contacts?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/user", UserController);
app.use("/contacts", ContactsController);

app.listen(process.env.PORT || 3001, (err) => {
  if (!err) {
    console.log(`server is running at port ${process.env.PORT}`);
  } else {
    console.log(err);
  }
});
