import express from "express";

import { categoryRouter } from "./router/category";

const app = express();

app.use(express.json());

const port = 8080;
app.use("/category", categoryRouter);

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
});
export async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}
