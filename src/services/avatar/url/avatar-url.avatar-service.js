import gravatarUrl from "gravatar-url";

export default function createAvatarURL(email) {
  return gravatarUrl(email, { protocol: "http", s: "250" });
}
