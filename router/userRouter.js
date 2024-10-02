import express from "express";

import { getUser } from "../controller/User/getUser";
import { postUser } from "../controller/User/postUser";
import { putUser } from "../controller/User/putUser";
import { deleteUser } from "../controller/User/deleteUser";

export const UserRouter = express.Router();

UserRouter.get("/", getUser);
UserRouter.post("/", postUser);
UserRouter.put("/:id", putUser);
UserRouter.delete("/", deleteUser);
