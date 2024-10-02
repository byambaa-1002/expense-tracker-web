import { sql } from "../../database";

export const deleteUser = async (request, response) => {
  const { deleteUserid } = request.body;

  try {
    const deleteUser =
      await sql`DELETE FROM deleteUser WHERE deleteUserid = ${deleteUserid}`;

    response.status(200).json({ deleteUser });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
