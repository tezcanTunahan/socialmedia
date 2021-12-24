import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import usersRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/post.js";
import cors from "cors";
import bodyParser from "body-parser";
import conversationRoute from "./routes/conversation.js";
import messageRoute from "./routes/message.js";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/message", messageRoute);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
