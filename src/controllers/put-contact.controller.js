import {
  DuplicateError,
  ServiceUnavailableError,
} from "../utils/errors/index.errors.js";

export default function makePutContact({ contactsDb, validationService }) {
  return async function putContact(httpRequest) {
    const contactData = httpRequest.body;

    await validationService({ contact: contactData });

    const isInDb = await contactsDb.findByProperties({
      email: contactData.email,
      phone: contactData.phone,
    });

    if (isInDb) {
      throw new DuplicateError(
        "Contact with given email or phone number already exists"
      );
    }

    const contact = await contactsDb.create(contactData);

    if (!contact) {
      throw new ServiceUnavailableError(
        "Contact cannot be created, due to server error, please try again later"
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
