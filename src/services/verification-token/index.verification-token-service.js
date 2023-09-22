import { nanoid } from "nanoid";

function createVerificationToken() {
  return nanoid();
}

const verificationTokenService = {
  createVerificationToken,
};

export default verificationTokenService;
