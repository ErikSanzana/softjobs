import { validateToken } from "../src/helpers/validateToken.js";
import { findError } from "../src/utils/util.js";

export const loginProtect = async (req, res, next) => {
  const header = req.headers.authorization;

  try {
    if (!req.header) {
      findError("auth_03");
      return;
    } else {
      const token = req.header("Authorization").split(" ")[1];
      const tokenData = await validateToken(token);
      req.user = tokenData;
      next();
    }
  } catch (error) {
    console.error("codigo error:", error.code, "->", error.message);
  }
};