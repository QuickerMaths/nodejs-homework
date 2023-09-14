import makeContactDb from "./contacts.data-access.js";
import Contact from "../models/contacts.model.js";

const contactsDb = makeContactDb({ model: Contact });

export default contactsDb;
