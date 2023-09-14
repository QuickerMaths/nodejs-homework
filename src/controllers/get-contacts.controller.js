import { NotFoundError } from "../utils/errors/NotFoundError.js";

export default function makeGetContacts({ contactsDb }) {
  return async function getContacts() {
    const contacts = await contactsDb.findAll();

    if (!contacts || contacts.length === 0) {
      throw new NotFoundError("No contacts found");
    }

    return {
      status: "OK",
      statusCode: 200,
      body: {
        contacts,
      },
    };
  };
}
