import { NotFoundError } from "../../utils/errors/index.errors.js";

export default function makeGetLogoutUser({ usersDb }) {
  return async function getLogoutUser(httpRequest) {
    const {
      user: { _id },
    } = httpRequest;

    const user = await usersDb.findByProperty({ property: "_id", value: _id });

    if (!user) {
      throw new NotFoundError("User with such id was not found");
    }

    await usersDb.update({
      userId: _id,
      changes: { token: null },
    });

    return {
      status: "OK",
      statusCode: 204,
      body: {},
    };
  };
}
