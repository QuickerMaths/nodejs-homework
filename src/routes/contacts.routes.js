import express from "express";
import contactsController from "../controllers/index.controllers.js";
import expressCallback from "../helpers/expressCallback.js";

const router = express.Router();

router
  .get("/", expressCallback(contactsController.getContacts))
  .get("/:id", expressCallback(contactsController.getContact))
  .post("/", expressCallback(contactsController.postContact))
  .delete("/:id", expressCallback(contactsController.deleteContact))
  .put("/:id", expressCallback(contactsController.putContact))
  .patch("/:id/favorite", expressCallback(contactsController.patchContact));

export default router;
