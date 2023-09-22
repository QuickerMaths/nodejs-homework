import express from "express";
import cors from "cors";
import logger from "./middlewares/logger.js";
import config from "./config/config.js";
import db from "../db/db.js";
import { BaseError } from "./utils/errors/BaseError.js";

import contactsRouter from "./routes/contacts.routes.js";
import usersRouter from "./routes/users.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
logger({ app });

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  return res.status(404).json({
    status: "FAILED",
    code: 404,
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  if (err instanceof BaseError && err.isOperational) {
    return res.status(err.statusCode).json({
      status: "FAILED",
      code: err.statusCode,
      message: err.message,
    });
  } else {
    console.log(err);
    res
      .status(500)
      .json({ status: "FAILED", code: 500, message: "Internal Server Error" });
    process.exit(1);
  }
});

db.once("open", () => {
  app.listen(config.port, () => {
    console.log("Database connection successful");
    console.log(`Server running. Use our API on port: ${config.port}`);
  });
});

export default app;
