import Joi from "joi";

const updateUserSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").messages({
    "string.base": "Subscription must be a string",
    "any.only":
      "Subscription must be one of the following: starter, pro, business",
  }),
});

export default updateUserSchema;
