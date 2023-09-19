import Joi from "joi";

const createUserSchema = Joi.object({
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

  password: Joi.string().min(6).max(20).required().messages({
    "string.base": "Password must be a string",
    "string.min": "Password must contain at least 6 characters",
    "string.max": "Password must contain no more than 20 characters",
    "any.required": "Password is required",
  }),
});

export default createUserSchema;
