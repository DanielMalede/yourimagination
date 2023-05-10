import express from "express";
import * as dotenv from "dotenv";
import {v2 as cloudinary } from "cloudinary";
import Post from "../model/postModel.js";
import {getPosts} from '../ctrl/postCtrl.js'
dotenv.config();

const router = express.Router();

router.get("/",getPosts)

export default router;


