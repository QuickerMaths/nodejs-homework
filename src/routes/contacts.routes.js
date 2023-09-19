import express from "express";
import contactsController from "../controllers/contacts/index.controllers.js";
import expressCallback from "../helpers/expressCallback.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .get("/", authMiddleware, expressCallback(contactsController.getContacts))
  .get("/:id", authMiddleware, expressCallback(contactsController.getContact))
  .post("/", authMiddleware, expressCallback(contactsController.postContact))
  .delete(
    "/:id",
    authMiddleware,
    expressCallback(contactsController.deleteContact)
  )
  .put("/:id", authMiddleware, expressCallback(contactsController.putContact))
  .patch(
    "/:id/favorite",
    authMiddleware,
    expressCallback(contactsController.patchContact)
  );

export default router;
