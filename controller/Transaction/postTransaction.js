import { sql } from "../../database/index";

export const postTransaction = async (request, response) => {
  const {
    userid,
    name,
    amount,
    transaction_type,
    description,
    username,
    categoryid,
  } = request.body;
  console.log(request.body);
  try {
    const postTransaction =
      await sql`INSERT INTO transaction (  userid, name, amount, transaction_type, description, username, categoryid)
VALUES ( ${userid}, ${name}, ${amount}, ${transaction_type},${description} , ${username}, ${categoryid})
`;

    response.status(200).json(postTransaction);
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
};
