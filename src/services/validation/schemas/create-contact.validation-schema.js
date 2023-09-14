import Joi from "joi";

const createContactSchema = Joi.object({
  name: Joi.string()
    .rule({ message: "Name must be a string" })
    .ruleset.min(3)
    .max(30)
    .rule({ message: "Name must contain between 3 and 30 characters" })
    .required()
    .rule({ message: "Name is required" }),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "pl"] },
    })
    .rule({ message: "Email must be a valid email" }),

  phone: Joi.string()
    .rule({ message: "Phone must be a string" })
    .ruleset.min(6)
    .max(12)
    .rule({ message: "Phone must contain between 6 and 12 numbers" })
    .required()
    .rule({ message: "Phone is required" }),

  favorite: Joi.boolean().rule({ message: "Favorite must be a boolean" }),
});

export default createContactSchema;
