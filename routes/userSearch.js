import express from "express";
import User from "../model/UserMode.js";
const route = express.Router();

///UserSearch/usrename => Get user by id
route.get("/userSearch/:username", async (req, res) => {
  const username = req.params.username;
  console.log(username);
  const singleUser = await User.find({ username: username });
  res.json(singleUser);
});

export default route;
