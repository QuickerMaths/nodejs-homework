import {
  ServiceUnavailableError,
  BadRequestError,
} from "../../utils/errors/index.errors.js";

export default function makePatchUserAvatar({ usersDb, avatarService }) {
  return async function patchUserAvatar(httpRequest) {
    const { file, user } = httpRequest;

    if (!file) {
      throw new BadRequestError("No file provided");
    }

    await avatarService(file);

    const avatarURL = `./public/avatars/${file.filename}.${
      file.mimetype.split("/")[1]
    }`;

    const { avatarURL: updatedAvatarURL } = await usersDb.update({
      userId: user._id,
      changes: { avatarURL },
    });

    if (!updatedAvatarURL === avatarURL)
      throw new ServiceUnavailableError(
        "Cannot update avatar, due to server error, please try again later."
      );

    return {
      statusCode: 200,
      body: {
        avatarUrl: updatedAvatarURL,
      },
    };
  };
}
