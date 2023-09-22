import createAvatarURL from "./url/avatar-url.avatar-service.js";
import imageManipulation from "./image-manipulation/image-manipulation.avatar-service.js";

const avatarService = Object.freeze({
  createAvatarURL,
  imageManipulation,
});

export default avatarService;
