import { NotFoundError } from "../../utils/errors/NotFoundError.js";

export default function makeGetContacts({ contactsDb }) {
  return async function getContacts(httpRequest) {
    const { page = 0, size = 5 } = httpRequest.query;

    const { total, contacts } = await contactsDb.findAll({ page, size });

    if (!contacts || contacts.length === 0) {
      throw new NotFoundError("No contacts found");
    }

    return {
      status: "OK",
      statusCode: 200,
      body: {
        contacts,
        meta: {
          totalPages: total,
          currentPage: page + 1,
          pageSize: size,
        },
      },
    };
  };
}
