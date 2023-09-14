import createContactSchema from "./schemas/create-contact.validation-schema.js";
import makeContactValidation from "./contact.validation.js";

const contactValidation = makeContactValidation({
  schema: createContactSchema,
});

const validationService = Object.freeze({
  contactValidation,
});

export default validationService;
