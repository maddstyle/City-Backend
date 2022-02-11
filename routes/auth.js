const router = require("express").Router();


// Get User
router.get("/usertest", (req, res) => {
  res.send("user test is successful");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  console.log(username);
})

module.exports = router;