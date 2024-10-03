import { sql } from "../../database";

export const putUser = async (request, response) => {
  const { id } = request.params;
  const { email, userName, password, avatar_img } = request.body;
  console.log(request.body);
  try {
    const putUser = await sql`UPDATE users
                                SET email=${email}, userName =${userName}, password = ${password}, avatar_img=${avatar_img}
                                WHERE userid = ${id}
                                RETURNING *`;
    response.status(200).json({ Users: putUser });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
};
