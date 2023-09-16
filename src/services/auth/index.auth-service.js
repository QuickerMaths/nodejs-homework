import hashService from "./hash/hash.auth-service.js";
import jwtService from "./jwt/jwt.auth-service.js";

const jwt = jwtService();
const hash = hashService();

const authService = Object.freeze({
  jwt,
  hash,
});

export default authService;
