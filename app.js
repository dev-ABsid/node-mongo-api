import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// file imports
import userRoute from "./routes/user.js";
import userSearchRoute from "./routes/userSearch.js";

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
const dbConnect = process.env.DBCONNECT;
mongoose
  .connect(dbConnect)
  .then((res) => {
    console.log(`DB Connected`);
  })
  .catch((err) => console.log(err));

// Routes
app.use(userRoute);
app.use(userSearchRoute);

//Node server start
app.listen(process.env.PORT || 3000, () => {
  console.log("server is running");
});
