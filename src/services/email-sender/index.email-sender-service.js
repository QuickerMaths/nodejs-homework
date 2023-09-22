import sgMail from "@sendgrid/mail";
import config from "../../config/config.js";
import { ServiceUnavailableError } from "../../utils/errors/index.errors.js";

sgMail.setApiKey(config.sendgrid.apiKey);

async function emailSender({ to, verificationToken }) {
  const msg = {
    to,
    from: "cult.b3ats@gmail.com",
    subject: "Email verification",
    html: `
    <h1>Verify your email</h1>
    <p>Click on the link below to verify your email</p>
    <a href="${config.clientURL}/api/users/verify/${verificationToken}">Verify email</a>
    `,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    throw new ServiceUnavailableError(
      "Verification email cannot be sent, due to server error, please try again later"
    );
  }
}

const emailSenderService = Object.freeze({
  emailSender,
});

export default emailSenderService;
