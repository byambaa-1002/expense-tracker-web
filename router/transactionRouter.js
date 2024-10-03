import express from "express";

import { getTransaction } from "../controller/Transaction/getTransaction";
import { postTransaction } from "../controller/Transaction/postTransaction";
import { putTransaction } from "../controller/Transaction/putTransaction";
import { deleteTransaction } from "../controller/Transaction/deleteTransaction";

// const { getCategory } = require("../controller/Category/getCategory");

export const TransactionRouter = express.Router();

TransactionRouter.get("/", getTransaction)
  .post("/", postTransaction)
  .put("/:id", putTransaction)
  .delete("/", deleteTransaction);
