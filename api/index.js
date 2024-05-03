import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import cookieParser from "cookie-parser"
import cors from "cors"

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
app.use(express.json());
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use("/auth", authRoute)
app.use(cookieParser())



app.listen(4000, ()=> {
    connect();
    console.log("Connected to backend")
})