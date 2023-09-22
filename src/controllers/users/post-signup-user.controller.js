import {
  ServiceUnavailableError,
  DuplicateError,
} from "../../utils/errors/index.errors.js";

export default function makePostSignUpUser({
  usersDb,
  validationService,
  authService,
  avatarService,
  verificationTokenService,
}) {
  return async function postSignUpUser(httpRequest) {
    const { body } = httpRequest;

    await validationService({ data: body });

    const isEmailTaken = await usersDb.findByProperty({
      property: "email",
      value: body.email,
    });

    if (isEmailTaken) {
      throw new DuplicateError("User with given email already exists");
    }

    const user = await usersDb.insert({
      userData: {
        email: body.email,
        password: await authService.hash.encrypt({ password: body.password }),
        avatarURL: avatarService(body.email),
        verificationToken: verificationTokenService(),
      },
    });

    if (!user) {
      throw new ServiceUnavailableError(
        "User cannot be created, due to server error, please try again later"
      );
    }

    return {
      status: "OK",
      statusCode: 201,
      body: {
        user,
      },
    };
  };
}
