const router = require("express").Router();
const User = require ("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try{  
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch(err){
    res.status(500).json(err);
  }
});

// Get User
// router.get("/usertest", (req, res) => {
//   res.send("user test is successful");
// });

// router.post("/userposttest", (req, res) => {
//   const username = req.body.username;
//   console.log(username);
// })

module.exports = router;