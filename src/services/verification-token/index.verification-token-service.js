import { nanoid } from "nanoid";

function createVerificationToken() {
  return nanoid();
}

const verificationTokenService = Object.freeze({
  createVerificationToken,
});

export default verificationTokenService;
