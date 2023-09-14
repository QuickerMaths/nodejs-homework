import createContactSchema from "./schemas/create-contact.validation-schema.js";
import {
  updateContactSchema,
  updateContactFavoriteSchema,
} from "./schemas/update-contact.validation-schema.js";
import makeContactValidation from "./contact.validation.js";

const createContactValidation = makeContactValidation({
  schema: createContactSchema,
});
const updateContactValidation = makeContactValidation({
  schema: updateContactSchema,
});
const updateContactFavoriteValidation = makeContactValidation({
  schema: updateContactFavoriteSchema,
});

const validationService = Object.freeze({
  createContactValidation,
  updateContactValidation,
  updateContactFavoriteValidation,
});

export default validationService;
