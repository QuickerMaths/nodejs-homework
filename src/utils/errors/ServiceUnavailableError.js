import { BaseError } from "./BaseError.js";

class ServiceUnavailableError extends BaseError {
  constructor(message) {
    super("ServiceUnavailableError", 503, message, false);
  }
}

export { ServiceUnavailableError };
