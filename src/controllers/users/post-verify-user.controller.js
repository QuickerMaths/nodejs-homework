import {
  BadRequestError,
  NotFoundError,
} from "../../utils/errors/index.errors.js";

export default function makePostVerifyUser({ usersDb, emailSenderService }) {
  return async function postVerifyUser(httpRequest) {
    const { email } = httpRequest.body;

    if (!email) {
      throw new BadRequestError("Email is required");
    }

    const user = await usersDb.findByProperty({
      property: "email",
      value: email,
    });

    if (!user) {
      throw new NotFoundError("User with given email does not exist");
    }

    if (user.verify) {
      throw new BadRequestError("User is already verified");
    }

    await emailSenderService({
      to: user.email,
      verificationToken: user.verificationToken,
    });

    return {
      statusCode: 200,
      body: {
        message: "Verification email sent",
      },
    };
  };
}
