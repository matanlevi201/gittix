import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { currentUser, errorHandler, NotFoundError } from "@mlgittix/common";

import { createOrdersRouter } from "./routes/create";
import { findAllRouter } from "./routes/find-all";
import { findOrderRouter } from "./routes/find";
import { cancelOrdersRouter } from "./routes/cancel";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test", // UNIT TEST NOTE: supertest uses http protocol and 'secure: true' means its cookies will be shared only on https protocol
  })
);

app.use(currentUser);
app.use(createOrdersRouter);
app.use(findAllRouter);
app.use(findOrderRouter);
app.use(cancelOrdersRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
