import express from "express";
import { getTheUser, registerNewUser, } from "../../src/controllers/contoller.js";
import { loginUser } from "../../src/controllers/logincontroller.js";
import { loginProtect } from "../../middlewares/autenticar.js";

export const router = express.Router();

router
  .route("/login")
  .post(
    // mail pass check,
    loginUser
  ) 
  .all(function (req, res, next) {
    res.status(405).json({ message: "not allowed" });
  }); 


router
  .route("/usuarios")
  .post(
    registerNewUser
  ) 
  .get(
    loginProtect,
    getTheUser
  ) 
  .all(function (req, res, next) {
    res.status(405).json({ message: "not allowed" });
  }); 