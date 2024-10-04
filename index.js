import express from "express";

import { CategoryRouter } from "./router/category";

import { TransactionRouter } from "./router/transactionRouter";

import { UserRouter } from "./router/userRouter";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
const port = 8000;

app.use("/category", CategoryRouter);
app.use("/transaction", TransactionRouter);
app.use("/users", UserRouter);

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
});
export async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}
