export default {
  port: process.env.PORT || 3000,
  ip: process.env.HOST || "0.0.0.0",
  db: {
    url: process.env.DB_URI || "mongodb://localhost:27017/contacts",
  },
  jwt: {
    jwtSecret: process.env.JWT_SECRET || "secret",
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || 3600,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || "secretRefresh",
    jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || 86400,
  },
};
