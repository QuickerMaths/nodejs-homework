export default {
  port: process.env.PORT || 3000,
  ip: process.env.HOST || "0.0.0.0",
  db: {
    url: process.env.DB_URI || "mongodb://localhost:27017/contacts",
  },
};
