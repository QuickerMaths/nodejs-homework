import { ServiceUnavailableError } from "../../utils/errors/index.errors.js";

export default function makePatchContact({ contactsDb, validationService }) {
  return async function patchContact(httpRequest) {
    const {
      params: { id },
      body: contactData,
    } = httpRequest;

    console.log(contactData);

    await validationService({ contact: contactData });

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
