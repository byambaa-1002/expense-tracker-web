import express from "express";

import { getCategory } from "../controller/Category/getCategory";
import { postCategory } from "../controller/Category/postCategory";
import { putCategory } from "../controller/Category/putCategory";
import { deleteCategory } from "../controller/Category/deleteCategory";

// const { getCategory } = require("../controller/Category/getCategory");

export const CategoryRouter = express.Router();

CategoryRouter.get("/", getCategory)
  .post("/", postCategory)
  .put("/", putCategory)
  .delete("/", deleteCategory);

// module.exports = CategoryRouter;

// categoryRouter.post("/", async (request, response) => {
//   const { email, categoryname, categorypassword, avatar_img } = request.body;
//   console.log(request.body);
//   try {
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
// INSERT INTO your_table_name (data, categoryid) VALUES ('Some data', 1);
// categoryRouter.put("/", async (request, response) => {
//   const { categoryid, email, categoryname, categorypassword, avatar_img } =
//     request.body;
//   console.log(request.body.categoryid);
//   try {
//     await sql`UPDATE category
//     SET categoryid = ${categoryid}, email = ${email}, categoryname = ${categoryname}, categorypassword = ${categorypassword},  avatar_img = ${avatar_img}
//     WHERE categoryid = ${categoryid} `;
//     response.status(200).json({ category: "success" });
//   } catch (error) {
//     console.log(error);
//     response.status(400).json({ message: "aldaa garlaa" });
//   }
// });

// categoryRouter.delete("/", async (request, response) => {
//   const { categoryid } = request.body;
//   console.log(request.body);
//   try {
//     await sql`DELETE FROM category  WHERE category.categoryid = ${categoryid}`;

//     response.status(200).json({ category: request.body });
//   } catch (error) {
//     console.log(error);
//     response.status(400).json({ message: "aldaa garlaa" });
//   }
// });
