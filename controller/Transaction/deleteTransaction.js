import { sql } from "../../database";

export const deleteTransaction = async (request, response) => {
  const { trabsactionID } = request.body;

  try {
    const deleteTransaction =
      await sql`DELETE FROM transaction WHERE trabsactionID = ${trabsactionID}`;

    response.status(200).json({ deleteTransaction });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};

// CREATE TABLE transaction (
//   trabsactionID SERIAL PRIMARY KEY,
//   userId int references users(userId),
//   name TEXT,
//   amount REAL NOT NULL,
//   description TEXT,
//   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   userName VARCHAR (100),
//   categoryid int references categorys(categoryid)
//   )
