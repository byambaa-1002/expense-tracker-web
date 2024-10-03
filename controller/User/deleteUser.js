import { sql } from "../../database";

export const deleteUser = async (request, response) => {
  const { userid } = request.body;
  console.log(request.body);

  try {
    const deleteUser = await sql`DELETE FROM users WHERE userid = ${userid}`;

    response.status(200).json({ deleteUser });
  } catch (error) {
    console.log(error);

    response.status(400).json({ message: "bad request" });
  }
};
