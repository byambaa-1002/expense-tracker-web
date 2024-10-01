import { sql } from "../../database";

export const putCategory = async (request, response) => {
  const { categoryid, categoryname, description, category_image } =
    request.body;
  try {
    const categories = await sql`UPDATE categorys
                                SET categoryName=${categoryname}, description= ${description}, category_image = ${category_image}
                                WHERE categoryid = ${categoryid}`;
    response.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "bad request" });
  }
};
