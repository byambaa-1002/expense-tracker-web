import { sql } from "../../database";

export const deleteCategory = async (request, response) => {
  const { categoryid } = request.body;

  try {
    const deleteCategory =
      await sql`DELETE FROM categorys WHERE categoryid = ${categoryid}`;

    response.status(200).json({ deleteCategory });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
