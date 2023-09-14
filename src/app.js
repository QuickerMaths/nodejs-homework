import express from "express";
import cors from "cors";
import logger from "./middlewares/logger.js";
import config from "./config/config.js";
import db from "../db/db.js";

// import contactsRouter from "./routes/api/contacts.js";

const app = express();

logger({ app });
app.use(cors());
app.use(express.json());

// app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

db.once("open", () => {
  app.listen(config.port, () => {
    console.log(`Server running. Use our API on port: ${config.port}`);
  });
});

export default app;
