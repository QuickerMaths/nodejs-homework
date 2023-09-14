import { ServiceUnavailableError } from "../utils/errors/ServiceUnavailableError.js";

export default function makePostContact({ contactsDb, validationService }) {
  return async function postContact(httpRequest) {
    const contactData = httpRequest.body;

    await validationService({ contactData });

    const contact = await contactsDb.create(contactData);

    if (!contact) {
      throw new ServiceUnavailableError(
        "Contact cannot be created, due to service error, please try again later"
      );
    }

    return {
      status: "OK",
      statusCode: 201,
      body: {
        contact,
      },
    };
  };
}
