import sgMail from "@sendgrid/mail";
import config from "../../config/config.js";
import { ServiceUnavailableError } from "../../utils/errors/ServiceUnavailableError";

sgMail.setApiKey(config.sendgrid.apiKey);

async function emailSender({ to, verificationToken }) {
  const msg = {
    to,
    from: "cult.b3ats@gmail.com",
    subject: "Email verification",
    text: "Please verify your email, by clicking on the link below",
    html: `<a href="${config.clientURL}/users/verify/${verificationToken}">Verify email</a>`,
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
