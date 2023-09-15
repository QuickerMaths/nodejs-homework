import Joi from "joi";

const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.base": "Name must be a string",
    "string.min": "Name must contain at least 3 characters",
    "string.max": "Name must contain no more than 30 characters",
    "any.required": "Name is required",
  }),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "pl"] },
    })
    .required()
    .messages({
      "string.base": "Email must be a string",
      "string.email": "Email must be a valid email",
      "any.required": "Email is required",
    }),

  phone: Joi.string().min(6).max(12).required().messages({
    "string.base": "Phone must be a string",
    "string.min": "Phone must contain at least 6 numbers",
    "string.max": "Phone must contain no more than 12 numbers",
    "any.required": "Phone is required",
  }),

  favorite: Joi.boolean().messages({
    "boolean.base": "Favorite must be a boolean",
  }),
});

export default createContactSchema;
