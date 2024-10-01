import { sql } from "../../database/index";

export const postTransaction = async (request, response) => {
  const { userid, name, amount, description, username, categoryid } =
    request.body;

  try {
    const postTransaction =
      await sql`INSERT INTO transaction (  userid, name, amount, description, username, categoryid)
VALUES ( ${userid}, ${name}, ${amount},${description} , ${username}, ${categoryid})
RETURNING *`;

    response.status(200).json({ record: postTransaction });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
};
