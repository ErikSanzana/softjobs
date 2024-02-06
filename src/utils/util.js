import ERRORS from "../helpers/error.js";

export const findError = (code) => {
    for (const err of ERRORS) {
        if (err.code === code) {
            return err;
        }
    }
    throw new Error(`No se encontró ningún error con el código ${code}`);
};
