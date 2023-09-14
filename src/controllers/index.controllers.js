import contactsDb from "../data-access/index.data-access.js";
import makeGetContacts from "./get-contacts.controller.js";
import makePostContact from "./post-contact.controller.js";

const getContacts = makeGetContacts({ contactsDb });
const postContact = makePostContact({ contactsDb, validationService });

const contactsController = Object.freeze({
  getContacts,
  postContact,
});

export default contactsController;
