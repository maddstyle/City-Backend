const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors")

dotenv.config();

// Get User
// app.get("/api/test", (req, res, next) => {
//   console.log("user test is successful");
// });

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DBconnection Success"))
.catch((err) => {
  console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Backend server is now running")
});