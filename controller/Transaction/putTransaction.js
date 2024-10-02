import { sql } from "../../database";

export const putTransaction = async (request, response) => {
  const { id } = request.params;
  const { userid, name, amount, description, username, categoryid } =
    request.body;
  try {
    const putTransaction = await sql`UPDATE transaction
                                SET userid= ${userid}, name=${name}, amount= ${amount}, description = ${description}, username=${username}, categoryid=${categoryid}
                                WHERE trabsactionid = ${id}
                                RETURNING *`;
    response.status(200).json({ transaction: putTransaction });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
};
