import { sql } from "../../database/index";

exports.addCategory = async (request, response) => {
  const { email, categoryname, categorypassword, avatar_img } = request.body;

  try {
    // console.log("first");
    const newCategory =
      await sql`INSERT INTO category ( email, categoryname, categorypassword, avatar_img)
                VALUES (${email}, ${categoryname}, ${categorypassword}, ${avatar_img})
                returning *`;
    console.log("second");

    response.status(200).json({ category: newCategory });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
};
