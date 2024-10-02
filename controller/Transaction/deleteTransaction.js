import { sql } from "../../database";

export const deleteTransaction = async (request, response) => {
  const { trabsactionID } = request.body;

  try {
    const deleteTransaction =
      await sql`DELETE FROM transaction WHERE trabsactionID = ${trabsactionID}`;

    response.status(200).json({ deleteTransaction });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
