import { sql } from "../../database";

export const postCategory = async (request, response) => {
  const { categoryid, categoryname, description, category_image } =
    request.body;

  try {
    const postCategory =
      await sql`INSERT INTO categorys ( categoryid,  categoryname, description, category_image)
                           VALUES (${categoryid}, ${categoryname}, ${description}, ${category_image} )
                            returning *`;
    console.log("second");
    response.status(200).json({ postCategory });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: "error" });
  }
};

// try {
//     // console.log("first");
//     const newCategory =
//       await sql`INSERT INTO category ( email, categoryname, categorypassword, avatar_img)
//             VALUES (${email}, ${categoryname}, ${categorypassword}, ${avatar_img})
//             returning *`;
//     console.log("second");

//     response.status(200).json({ category: newCategory });
//   } catch (error) {
//     console.log(error);
//     response.status(400).json({ message: error });
//   }
// });
