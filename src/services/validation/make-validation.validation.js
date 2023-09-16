import { ValidationError } from "../../utils/errors/ValidationError.js";

export default function makeValidation({ schema }) {
  return async function validate({ data }) {
    const result = await schema.validate({ ...data }, { abortEarly: false });

    if (result.error) throw new ValidationError(result.error);

    return result;
  };
}
