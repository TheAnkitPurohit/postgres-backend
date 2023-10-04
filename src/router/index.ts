import express from "express";
import users from "./user.router";

const router = express.Router();

export default (): express.Router => {
  users(router);

  return router;
};
