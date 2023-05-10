import express from "express";
import * as dotenv from "dotenv";
import { getDalle, postDalle } from "../ctrl/dalleCtrl.js";
dotenv.config();

const router = express.Router();

router.get("/", getDalle);
router.post("/", postDalle);

export default router;
