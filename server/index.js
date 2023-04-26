import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import numberRoute from "./routes/numberRoute.js";
import mongoose from "mongoose";

// rest objct
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api", numberRoute);

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {}
};

app.listen(8800, () => {
  connect();
});
