const router = require("express").Router();


// Get User
router.get("/usertest", (req, res, next) => {
  res.send("user test is successful");
});

router.post("/userposttest", (req, res, next) => {
  const username = req.body.username;
  console.log(username);
})

module.exports = router;
