import { sql } from "../../database";

export const deleteTransaction = async (_request, response) => {
  try {
    const transaction = await sql`SELECT * FROM transaction`;
    response.status(200).json({ transaction });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
