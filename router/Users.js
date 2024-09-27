import express from "express";
///////////////////////////////////////
import { sql } from "../database";

export const categoryRouter = express.Router();

UsersRouter.get("/", async (_request, response) => {
  const category = await sql`SELECT * FROM category`;

  response.status(200).json({
    data: category,
  });
});

UsersRouter.post("/", async (request, response) => {
  const { email, categoryname, categorypassword, avatar_img } = request.body;
  console.log(request.body);
  try {
    // console.log("first");
    const newUsers =
      await sql`INSERT INTO category ( email, categoryname, categorypassword, avatar_img)
            VALUES (${email}, ${categoryname}, ${categorypassword}, ${avatar_img})
            returning *`;
    console.log("second");

    response.status(200).json({ Users: newUsers });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
});

UsersRouter.put("/", async (request, response) => {
  const { categoryid, email, categoryname, categorypassword, avatar_img } =
    request.body;
  console.log(request.body.categoryid);
  try {
    await sql`UPDATE Users
    SET categoryid = ${categoryid}, email = ${email}, categoryname = ${categoryname}, categorypassword = ${categorypassword},  avatar_img = ${avatar_img}  
    WHERE categoryid = ${categoryid} `;
    response.status(200).json({ category: "success" });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
});

UsersRouter.delete("/", async (request, response) => {
  const { categoryid } = request.body;
  console.log(request.body);
  try {
    await sql`DELETE FROM category  WHERE category.categoryid = ${categoryid}`;

    response.status(200).json({ category: request.body });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "aldaa garlaa" });
  }
});
