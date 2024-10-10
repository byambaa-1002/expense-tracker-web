import { sql } from "../../database";

export const getTransaction = async (request, response) => {
  const { userid } = request.body;
  try {
    const transaction =
      await sql`SELECT *, categorys.name as categoryname FROM transaction
    Inner join users ON users.id  = transactions.userid
    Inner join categorys ON categorys.id = transactions.categoryid
    WHERE transactions.userid = ${userid}`;
    response.status(200).json({ transaction });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
