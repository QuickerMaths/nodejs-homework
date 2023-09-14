import express from "express";
import contactsController from "../controllers/index.controllers.js";

const router = express.Router();

router
  .get("/", contactsController.getContacts)
  .post("/", contactsController.postContact);

export default router;
