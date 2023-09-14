import contactsDb from "../data-access/index.data-access.js";
import makeGetContacts from "./get-contacts.controller.js";
import makeGetContact from "./get-contact.controller.js";
import makePostContact from "./post-contact.controller.js";
import makeDeleteContact from "./delete-contact.controller.js";
import validationService from "../services/validation/index.validation.js";

const getContacts = makeGetContacts({ contactsDb });
const getContact = makeGetContact({ contactsDb });
const postContact = makePostContact({
  contactsDb,
  validationService: validationService.contactValidation,
});
const deleteContact = makeDeleteContact({ contactsDb });

const contactsController = Object.freeze({
  getContacts,
  getContact,
  postContact,
  deleteContact,
});

export default contactsController;
