import express from "express";

import { categoryRouter } from "./router/category";
// import { OrdersRouter } from "./router/Orders2";
// import { ProductsRouter } from "./router/Products";

const app = express();

app.use(express.json());

const port = 8080;

app.use("/category", categoryRouter);
// app.use("/category", Orders2Router);
// app.use("/category", ProductsRouter);

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
});
export async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}
