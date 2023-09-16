import express from "express";
import expressCallback from "../helpers/expressCallback.js";
import usersController from "../controllers/users/index.controller.js";

const router = express.Router();

let controller;

router
  // .get("/current", controller)
  // .get("/logout", controller)
  .post("/signup", expressCallback(usersController.postSignUpUser))
  .post("/login", expressCallback(usersController.postLoginUser));

export default router;
