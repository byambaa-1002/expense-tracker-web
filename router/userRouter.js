import express from "express";

import { getUser } from "../controller/User/getUser";
import { postUser } from "../controller/User/postUser";
import { putUser } from "../controller/User/putUser";
import { deleteUser } from "../controller/User/deleteUser";

export const UserRouter = express.Router();

UserRouter.get("/", getUser)
  .post("/", postUser)
  .put("/", putUser)
  .delete("/", deleteUser);
