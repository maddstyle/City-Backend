const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DBconnection Success"))
.catch((err) => {
  console.log(err);
});

app.get("/api/test", () => {
  console.log("test is successful");
})

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is now running")
});