import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const server = express();

// MongoDB connection
const dbConnect = process.env.DBCONNECT;
mongoose
  .connect(dbConnect)
  .then((res) => {
    console.log(`DB Connected`);
  })
  .catch((err) => console.log(err));

//Node server start
server.listen(process.env.PORT || 3000, () => {
  console.log("server is running");
});
