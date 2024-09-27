import express from "express";

import { addCategory } from "../controller/post/addCategory";
export const userRouter = express.Router();
userRouter.post("/addCategory", addCategory);
