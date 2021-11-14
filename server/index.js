import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGO_URL;

mongoose.connect(CONNECTION_URL, () => {
  console.log("connectod to mongodb");
});

app.listen(PORT, () => {
  console.log(`backend server running on server : ${PORT}`);
});
