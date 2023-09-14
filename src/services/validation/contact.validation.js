import { ValidationError } from "../../utils/errors/ValidationError.js";

export default function makeContactValidation({ schema }) {
  return async function validate({ contact }) {
    const result = await schema.validate({ ...contact }, { abortEarly: false });

    if (result.error) throw new ValidationError(result.error);

    return result;
  };
}
