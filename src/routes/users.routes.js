import express from "express";

const router = express.Router();

let controller;

router
  .get("/current", controller)
  .post("/signup", controller)
  .post("/login", controller);

export default router;
