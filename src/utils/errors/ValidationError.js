import { BaseError } from "./BaseError.js";

class ValidationError extends BaseError {
  constructor(message) {
    super("ValidationError", 400, message, true);
  }
}

export { ValidationError };
