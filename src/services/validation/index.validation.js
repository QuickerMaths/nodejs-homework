import createContactSchema from "./schemas/create-contact.validation-schema.js";
import updateContactSchema from "./schemas/update-contact.validation-schema.js";
import makeContactValidation from "./contact.validation.js";

const createContactValidation = makeContactValidation({
  schema: createContactSchema,
});
const updateContactValidation = makeContactValidation({
  schema: updateContactSchema,
});

const validationService = Object.freeze({
  createContactValidation,
  updateContactValidation
});

export default validationService;
