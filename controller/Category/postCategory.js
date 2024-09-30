import { sql } from "../../database";
export const postCategory = async (_request, response) => {
  try {
    const categories = await sql`SELECT * FROM categorys`;
    response.status(200).json({ categories });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
