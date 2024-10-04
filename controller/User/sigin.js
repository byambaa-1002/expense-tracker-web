import { sql } from "../../database";

export const signin = async (request, response) => {
  const { email, password } = request.body;
  console.log(request.body);
  try {
    const user = await sql`SELECT * FROM users
                           WHERE email = ${email} and password =${password}`;
    response.status(200).json({ users: user });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
};
