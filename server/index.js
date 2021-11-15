import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import usersRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/users", (req, res) => {
  res.send("users");
});

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("connectod to mongodb");
});
app.listen(PORT, () => {
  console.log(`backend server running on server : ${PORT}`);
});
