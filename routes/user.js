const { verifyToken } = require("./verifyToken");
const router = require("express").Router();

module.exports = router;
// Get User
// router.get("/usertest", (req, res, next) => {
//   res.send("user test is successful");
// });

// router.post("/userposttest", (req, res, next) => {
//   const username = req.body.username;
//   res.send("your name is: " + username);
// })


router.put("/:id", verifyToken, (req, res) => {
  if(req.user.id === req.params.id || is)
})

module.exports = router;