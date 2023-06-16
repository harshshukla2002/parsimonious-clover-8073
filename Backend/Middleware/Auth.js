const jwt = require("jsonwebtoken");
require("dotenv").config()
const blacklist = require("../blacklist");
const Auth = (req, res, next) => {
  const token= req.headers.authorization.split(" ")[1]
  if (token){
     if(blacklist.includes(token)){
        res.json({msg:"login again"})
     }
    try {
      const decoded = jwt.verify(token, "Pomodro");
      if (decoded) {
        req.body.userId = decoded.userId;
        next();
      } else {
        res.json({ msg: "invalid token" });
      }
    } catch (err) {
      res.json({ msg: "hello" });
    }
  }else{
    res.json({msg:"login again"})
  }
};


module.exports={Auth}
