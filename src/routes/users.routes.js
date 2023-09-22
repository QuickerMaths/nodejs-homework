import express from "express";
import multer from "multer";
import usersController from "../controllers/users/index.controller.js";
import expressCallback from "../helpers/expressCallback.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import storage from "../helpers/multerStorage.js";

const upload = multer({ storage });
const router = express.Router();

router
  .get(
    "/current",
    authMiddleware,
    expressCallback(usersController.getCurrentUser)
  )
  .get(
    "/logout",
    authMiddleware,
    expressCallback(usersController.getLogoutUser)
  )
  .get(
    "/verify/:verificationToken",
    expressCallback(usersController.getVerifyUser)
  )
  .post("/signup", expressCallback(usersController.postSignUpUser))
  .post("/login", expressCallback(usersController.postLoginUser))
  .patch("/", authMiddleware, expressCallback(usersController.patchUser))
  .patch(
    "/avatars",
    authMiddleware,
    upload.single("avatar"),
    expressCallback(usersController.patchUserAvatar)
  );

export default router;
