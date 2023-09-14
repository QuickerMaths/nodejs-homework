import { NotFoundError } from "../utils/errors/index.errors.js";

export default function makeGetContact({ contactsDb }) {
  return async function getContact(httpRequest) {
    const { id } = httpRequest.params;

    const contact = await contactsDb.findById({ id });

    if (!contact) {
      throw new NotFoundError("Contact with such id was not found");
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
