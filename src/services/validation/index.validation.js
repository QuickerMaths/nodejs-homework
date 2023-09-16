import createContactSchema from "./schemas/contacts/create-contact.validation-schema.js";
import createUserSchema from "./schemas/users/create-user.validation-schema.js";
import makeValidation from "./make-validation.validation.js";
import {
  updateContactSchema,
  updateContactFavoriteSchema,
} from "./schemas/contacts/update-contact.validation-schema.js";

const createContactValidation = makeValidation({
  schema: createContactSchema,
});
const updateContactValidation = makeValidation({
  schema: updateContactSchema,
});
const updateContactFavoriteValidation = makeValidation({
  schema: updateContactFavoriteSchema,
});
const createUserValidation = makeValidation({
  schema: createUserSchema,
});

const validationService = Object.freeze({
  createContactValidation,
  updateContactValidation,
  updateContactFavoriteValidation,
  createUserValidation,
});

export default validationService;
