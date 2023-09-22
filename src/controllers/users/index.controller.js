import makeGetCurrentUser from "./get-current-user.controller.js";
import makeGetLogoutUser from "./get-logout-user.controller.js";
import makeGetVerifyUser from "./get-verify-user.controller.js";
import makePostSignUpUser from "./post-signup-user.controller.js";
import makePostLoginUser from "./post-login-user.controller.js";
import makePatchUser from "./patch-user.controller.js";
import usersDb from "../../data-access/users/index.data-access.js";
import authService from "../../services/auth/index.auth-service.js";
import validationService from "../../services/validation/index.validation.js";

const getCurrentUser = makeGetCurrentUser({ usersDb });
const getLogoutUser = makeGetLogoutUser({ usersDb });
const getVerifyUser = makeGetVerifyUser();
const postSignUpUser = makePostSignUpUser({
  usersDb,
  validationService: validationService.createUserValidation,
  authService,
});
const postLoginUser = makePostLoginUser({
  usersDb,
  validationService: validationService.loginUserValidation,
  authService,
});
const patchUser = makePatchUser({
  usersDb,
  validationService: validationService.updateUserValidation,
});

const usersController = Object.freeze({
  getCurrentUser,
  getLogoutUser,
  getVerifyUser,
  postSignUpUser,
  postLoginUser,
  patchUser,
});

export default usersController;
