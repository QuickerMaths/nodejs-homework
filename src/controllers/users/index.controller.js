import makePostSignUpUser from "./post-signup-user.controller.js";
import makePostLoginUser from "./post-login-user.controller.js";
import makeGetLogoutUser from "./get-logout-user.controller.js";
import makeGetCurrentUser from "./get-current-user.controller.js";
import usersDb from "../../data-access/users/index.data-access.js";
import authService from "../../services/auth/index.auth-service.js";
import validationService from "../../services/validation/index.validation.js";

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
const getLogoutUser = makeGetLogoutUser({ usersDb });
const getCurrentUser = makeGetCurrentUser({ usersDb });

const usersController = Object.freeze({
  postSignUpUser,
  postLoginUser,
  getLogoutUser,
  getCurrentUser,
});

export default usersController;
