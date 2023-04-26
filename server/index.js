import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import numberRoute from "./routes/numberRoute.js";

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

app.listen(8800, () => {
  console.log("Connected to backend!");
});
