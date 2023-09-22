import {
  NotFoundError,
  ServiceUnavailableError,
} from "../../utils/errors/index.errors.js";

export default function makeGetVerifyUser({ usersDb }) {
  return async function getVerifyUser(httpRequest) {
    const { verificationToken } = httpRequest.params;

    const user = await usersDb.findByProperty({
      property: "verificationToken",
      value: verificationToken,
    });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const updatedUser = await usersDb.update({
      userId: user._id,
      changes: { verify: true, verificationToken: null },
    });

    if (!updatedUser) {
      throw new ServiceUnavailableError(
        "Email verification failed, due to server error, please try again later"
      );
    }

    return {
      statusCode: 200,
      body: {
        message: "Verification successful",
      },
    };
  };
}
