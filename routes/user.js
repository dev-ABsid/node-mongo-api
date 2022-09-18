import express from "express";
import User from "../model/UserMode.js";
const route = express.Router();

// /user => Get
route.get("/user", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// /user => Post
route.post("/user", async (req, res) => {
  console.log(req.body);
  const newUser = new User({
    username: req.body.username,
    name: req.body.name,
    password: req.body.password,
  });
  try {
    const userRes = await newUser.save();
    console.log(userRes);
    res.send("username created");
  } catch (err) {
    console.log(err);
  }
});
export default route;
