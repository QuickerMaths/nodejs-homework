import hashService from "./hash/hash.auth-service.js";

const hash = hashService();

const authService = Object.freeze({
  hash,
});

export default authService;
