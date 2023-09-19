import { ServiceUnavailableError } from "../../utils/errors/index.errors.js";

export default function makePatchUser({ usersDb, validationService }) {
  return async function patchUser(httpRequest) {
    const { body } = httpRequest;

    await validationService({ data: body });

    const user = await usersDb.update({
      userId: httpRequest.user._id,
      changes: { body },
    });

    if (!user) {
      throw new ServiceUnavailableError(
        "User cannot be updated, due to server error, please try again later"
      );
    }

    return {
      status: "OK",
      statusCode: 200,
      body: {
        user,
      },
    };
  };
}
