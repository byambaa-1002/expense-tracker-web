import express from "express";
///////////////////////////////////////
import { sql } from "../database";

export const Transaction = express.Router();

TransactionRouter.get("/", async (_request, response) => {
  const category = await sql`SELECT * FROM Transaction`;

  response.status(200).json({
    data: Transaction,
  });
});

TransactionRouter.post("/", async (request, response) => {
  const {
    id,
    user_id,
    name,
    amount,
    transaction_type,
    description,
    createdAt,
    updatedAt,
    category_id,
  } = request.body;
  console.log(request.body);
  try {
    // console.log("first");
    const newTransaction =
      await sql`INSERT INTO Transaction ( id, user_id,name, amount, transaction_type, description, createdAt, updatedAt, category_id)
            VALUES (${id}, ${user_id}, ${amount},  ${name}, ${transaction_type}, ${description}, ${createdAt}, ${updatedAt}, ${category_id})
            returning *`;
    console.log("second");

    response.status(200).json({ category: newTransaction });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
});

TransactionRouter.put("/", async (request, response) => {
  const {
    id,
    user_id,
    amount,
    transaction_type,
    description,
    createdAt,
    updatedAt,
    category_id,
  } = request.body;
  console.log(request.body.id);
  try {
    await sql`UPDATE Transaction
    SET id = ${id}, user_id = ${user_id}, amount = ${amount}, transaction_type = ${transaction_type},  description = ${description} , createdAt = ${createdAt}, updatedAt = ${updatedAt}, category_id = ${category_id} 
    WHERE id = ${id} `;
    response.status(200).json({ Transaction: "success" });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
});

TransactionRouter.delete("/", async (request, response) => {
  const { Transaction } = request.body;
  console.log(request.body);
  try {
    await sql`DELETE FROM Transaction  WHERE Transaction.id = ${id}`;

    response.status(200).json({ Transaction: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
});
