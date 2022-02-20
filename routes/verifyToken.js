const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if(authHeader){
     jwt.verify(token, process.env.JWT_SEC, (err, user) =>{
        if(err) res.status(403).json("Token is not valid!");
        req.user = user;
        next();
    })
  } else {
    return res.status(401).json("Your are not authenticated!");
  }

  const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      
    })
  }
}

module.exports = { verifyToken }