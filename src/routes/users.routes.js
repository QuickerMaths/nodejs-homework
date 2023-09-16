import express from "express";
import usersController from "../controllers/users/index.controller.js";
import expressCallback from "../helpers/expressCallback.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  // .get("/current", controller)
  .get(
    "/logout",
    authMiddleware,
    expressCallback(usersController.getLogoutUser)
  )
  .post("/signup", expressCallback(usersController.postSignUpUser))
  .post("/login", expressCallback(usersController.postLoginUser));

export default router;
