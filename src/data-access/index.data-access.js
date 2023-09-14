import makeContactDb from "./comments.data-access.js";
import Contact from "../models/contact.model.js";

const contactsDb = makeContactDb({ model: Contact });

export default contactsDb;
