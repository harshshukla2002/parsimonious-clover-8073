const express = require("express");
const { UserModel } = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

// Create User
userRouter.post("/register", async (req, res) => {
    const { name, email, gender, pass,age,city } = req.body;
  try {
    
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(200).send({ msg: "User Already Registered!!" });
    } else {
      bcrypt.hash(pass, 5, async (err, hash) => {
        const user = await UserModel({ name, email, gender, pass:hash,age,city });
        await user.save();
        res.status(200).send({ msg: "New User Registered!!",user:req.body });
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
          const token = jwt.sign({ userId: user._id },"Pomodro");
          res.status(200).send({ msg: "Login Successful!!", token });
        } else {
          res.status(400).send({ msg: "Wrong Credentials!!" });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
});

module.exports = { userRouter };
