const express = require("express");
const { UserModel } = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const blacklist = require("../blacklist");
const {Auth}=require("../Middleware/Auth");
// Create User
userRouter.post("/register", async (req, res) => {
  const { name, email, gender, pass, age } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(200).send({ msg: "User Already Registered!!" });
    } else {
      bcrypt.hash(pass, 5, async (err, hash) => {
        const user = await UserModel({ name, email, gender, pass: hash, age });
        await user.save();
        res.status(200).send({ msg: "New User Registered!!", user: req.body });
      });
    }
  } catch (error) {
    req.status(400).send({ error: error.message });
  }
});
// User Login
userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(pass, user.pass, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: user._id, user: user.name },
            "Pomodro"
          );
          res.status(200).send({ msg: "Login Successful!!", token, user });
        } else {
          res.status(400).send({ msg: "Wrong Credentials!!" });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
userRouter.get("/logout",Auth, (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  
  try {
    blacklist.blacklist.push()
    res.status(200).json({ mag: "the user is logout" });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

module.exports = { userRouter };
