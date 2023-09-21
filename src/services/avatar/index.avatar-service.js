import gravatarUrl from "gravatar-url";

function createAvatarURL(email) {
  return gravatarUrl(email, { protocol: "http", s: "250" });
}

const avatarService = Object.freeze({
  createAvatarURL,
});

export default avatarService;
