import express from "express";
import { postNumber } from "../controller/numberController.js";

const router = express.Router();

router.post("/number", postNumber);

export default router;
