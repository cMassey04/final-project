import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
//import authRoute from "./api/routes/auth.js"

const app = express();
dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// middlewares
//app.use("/api/auth", authRoute)

app.listen(4000, ()=> {
    connect();
    console.log("Connected to backend")
})