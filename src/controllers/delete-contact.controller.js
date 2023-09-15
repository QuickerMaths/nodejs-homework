import { NotFoundError } from "../utils/errors/index.errors.js";

export default function makeDeleteContact({ contactsDb }) {
  return async function deleteContact(httpRequest) {
    const { id } = httpRequest.params;

    const contact = await contactsDb.findById({ id });

    if (!contact) {
      throw new NotFoundError("Contact with such id was not found");
    }

    await contactsDb.remove({ id });

    return {
      status: "OK",
      statusCode: 204,
      body: {},
    };
  };
}
