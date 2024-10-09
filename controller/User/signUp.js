import { sql } from "../../database";

export const signUp = async (request, response) => {
  const { myName, myEmail, myPassword, myAvatar_img } = request.body;
  console.log(request.body);
  try {
    const user =
      await sql`INSERT INTO users (username , email, password, avatar_img)
                VALUES (${myName}, ${myEmail}, ${myPassword}, ${myAvatar_img})`;
    response.status(200).json({ users: user });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
};
