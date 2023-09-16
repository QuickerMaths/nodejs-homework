import makePostSignUpUser from "./post-signup-user.controller.js";
import usersDb from "../../data-access/users/index.data-access.js";
import authService from "../../services/auth/index.auth-service.js";
import validationService from "../../services/validation/index.validation.js";

const postSignUpUser = makePostSignUpUser({
  usersDb,
  validationService: validationService.createUserValidation,
  authService,
});

const usersController = Object.freeze({
  postSignUpUser,
});

export default usersController;
