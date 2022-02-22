const User = require("../models/User");
const { 
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin, 
} = require("./verifyToken");

const router = require("express").Router();


module.exports = router;
// Get User
// router.get("/usertest", (req, res, next) => {
//   res.send("user test is successful");
// });

router.post("/userposttest", (req, res, next) => {
  const username = req.body.username;
  res.send("your name is: " + username);
})

// UPDATE
router.put("/:id", verifyToken, (req, res) => {
  if(req.body.password) {
   req.body.password = CryptoJS.AES.encrypt(
     req.body.password,
     process.env.PASS_SEC
   ).toString();
  }

    try {
      const updatedUser = await.findByIdAndUpdate(
        req.params.id, 
      {
        $set: req.body,
      },
      { new:true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
});

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try{
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  console.log("registred")
  try{
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;  
        res.status(200).json({others});
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;