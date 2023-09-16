export default function makeGetCurrentUser({ usersDb }) {
  return async function getCurrentUser(httpRequest) {
    const {
      user: { _id },
    } = httpRequest;

    const user = await usersDb.findByProperty({ property: "_id", value: _id });

    if (!user) {
      throw new NotFoundError("Not authorized");
    }

    return {
      status: "OK",
      statusCode: 200,
      body: {
        email: user.email,
        subscription: user.subscription,
      },
    };
  };
}
