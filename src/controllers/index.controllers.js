import contactsDb from "../data-access/index.data-access.js";
import makeGetContacts from "./get-contacts.controller.js";

const getContacts = makeGetContacts({ contactsDb });

const contactsController = Object.freeze({
  getContacts,
});

export default contactsController;
