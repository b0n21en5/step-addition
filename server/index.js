import express from "express";
import cors from "cors";
import numberRoute from "./routes/numberRoute.js";

// rest objct
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api", numberRoute);

app.listen(8800, () => {});
