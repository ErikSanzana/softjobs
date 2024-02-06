import { forAuth } from "../models/logModel.js";
import { forRegisterNewUser } from "../models/model.js";

export const getTheUser = async (req, res, next) => {
  try {
    const user = req.user;
    // console.log("consoleloh controller getuser: ", user);
    const result = await forAuth(user.email);
    res.status(201).json({ data: result }); // esto es lo que se envia al front para que lo muestre en profile??
    console.log("console log del controller...:", result);
    return result;
  } catch (error) {
    next(error);
  }
};

export const registerNewUser = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await forRegisterNewUser(user);
    res.status(201).json({ user: result });
  } catch (error) {
    next(error);
  }
};