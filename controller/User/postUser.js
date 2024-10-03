import { sql } from "../../database/index";

export const postUser = async (request, response) => {
  const { userid, email, username, password, avatar_img } = request.body;

  try {
    const postUser =
      await sql`INSERT INTO Users (userid, email, username, password, avatar_img)
VALUES (${userid}, ${email}, ${username},${password} , ${avatar_img})
RETURNING *`;

    response.status(200).json({ record: postUser });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
};
