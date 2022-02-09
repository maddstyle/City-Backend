const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test is successful");
});

router.post("userposttest", (req, res) => {
  const usrname
})
// app.listen(process.env.PORT || 5000, () => {
//   console.log("Backend server is running!");
// });

module.exports = router;
