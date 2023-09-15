import {
  DuplicateError,
  ServiceUnavailableError,
} from "../utils/errors/index.errors.js";

export default function makePutContact({ contactsDb, validationService }) {
  return async function putContact(httpRequest) {
    const {
      params: { id },
      body: contactData,
    } = httpRequest;

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

    const contact = await contactsDb.update({ id, changes: contactData });

    if (!contact) {
      throw new ServiceUnavailableError(
        "Contact cannot be updated, due to server error, please try again later"
      );
    }

    return {
      status: "OK",
      statusCode: 200,
      body: {
        contact,
      },
    };
  };
}
