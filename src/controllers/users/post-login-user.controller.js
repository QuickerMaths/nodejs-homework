import { UnauthorizedError } from "../../utils/errors/index.errors.js";

export default function makePostLoginUser({
  usersDb,
  validationService,
  authService,
}) {
  return async function postLoginUser(httpRequest) {
    const { body } = httpRequest;

    await validationService({ data: body });

    const user = await usersDb.findByProperty({
      property: "email",
      value: body.email,
    });
    const isPasswordValid = await authService.hash.compare({
      password: body.password,
      hashedPassword: user.password,
    });

    if (!isPasswordValid || !user) {
      throw new UnauthorizedError("Invalid email or password");
    }

    const token = await authService.jwt.signToken({ payload: user._id });

    const updatedUser = await usersDb.update({
      userId: user._id,
      changes: { token },
    });

    console.log(updatedUser);

    if (!updatedUser) {
      throw new ServiceUnavailableError(
        "User cannot be logged in, due to server error, please try again later"
      );
    }

    return {
      status: "OK",
      statusCode: 200,
      body: {
        token: updatedUser.token,
        user: {
          email: updatedUser.email,
          subscription: updatedUser.subscription,
        },
      },
    };
  };
}
