import contactsDb from "../../data-access/contacts/index.data-access.js";
import makeGetContacts from "./get-contacts.controller.js";
import makeGetContact from "./get-contact.controller.js";
import makePostContact from "../post-contact.controller.js";
import makeDeleteContact from "./delete-contact.controller.js";
import makePutContact from "./put-contact.controller.js";
import makePatchContact from "../patch-contact.controller.js";
import validationService from "../../services/validation/index.validation.js";

const getContacts = makeGetContacts({ contactsDb });
const getContact = makeGetContact({ contactsDb });
const postContact = makePostContact({
  contactsDb,
  validationService: validationService.createContactValidation,
});
const deleteContact = makeDeleteContact({ contactsDb });
const putContact = makePutContact({
  contactsDb,
  validationService: validationService.updateContactValidation,
});
const patchContact = makePatchContact({
  contactsDb,
  validationService: validationService.updateContactFavoriteValidation,
});

const contactsController = Object.freeze({
  getContacts,
  getContact,
  postContact,
  deleteContact,
  putContact,
  patchContact,
});

export default contactsController;
