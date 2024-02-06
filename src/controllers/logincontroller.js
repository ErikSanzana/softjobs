import { forAuth } from "../models/logModel.js";
import { findError } from "../utils/util.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const loginUser = async (req, res, next) => {
  const user = req.body;

  try {
    const finder = await forAuth(user.email);
    if (!finder) {
      const errorFound = findError("auth_01");
      return res
        .status(errorFound[0].status)
        .json({ error: errorFound[0].message });
    } else {
      const compare = bcrypt.compareSync(user.password, finder.password);
      console.log(compare)

      if (!compare) {
        const errorFound = findError("auth_02");
        return res
          .status(errorFound[0].status)
          .json({ error: errorFound[0].message });
      } else {
        const { email, lenguage } = finder;
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
          expiresIn: "7h",
        });
        res.status(200).json({
          message: `Welcome user: ${email}, now start to work on ${lenguage} until the end of the days... `,
          code: 200,
          token,
        });
      }
    }


  } catch (error) {
    next(error);
  }
};