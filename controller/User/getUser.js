import { sql } from "../../database/index";

export const getUser = async (_request, response) => {
  try {
    const getUser = await sql`SELECT * FROM users`;
    response.status(200).json({ getUser });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
