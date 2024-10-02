import { sql } from "../../database";

export const putUser = async (request, response) => {
  const { id } = request.params;
  const { email, username, password, avatar_img } = request.body;
  try {
    const putUser = await sql`UPDATE users
                                SET email=${email}, username =${username} password = ${password}, avatar_img=${avatar_img}
                                WHERE putUser = ${id}
                                RETURNING *`;
    response.status(200).json({ Users: putUser });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
};
