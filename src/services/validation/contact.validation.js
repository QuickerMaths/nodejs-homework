export default function makeContactValidation({ schema }) {
  return async function validate({ contact }) {
    try {
      const result = await schema.validate({ ...contact });

      return result;
    } catch (err) {
      return err;
    }
  };
}
