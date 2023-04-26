import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import numberRoute from "./routes/numberRoute.js";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

// es-module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// rest objct
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));

// routes
app.use("/api", numberRoute);

// rest api
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {}
};

app.listen(8800, () => {
  connect();
});
