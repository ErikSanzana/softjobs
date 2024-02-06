import bcrypt from "bcryptjs";
import pool from "../../config/basedatos/db.js";

export const forRegisterNewUser = async ({
  email,
  password,
  rol,
  lenguage,
}) => {
  // Validar entrada
  if (!email || !password) {
    throw new Error("El correo electrónico y la contraseña son obligatorios.");
  }

  try {
    // Generar hash de la contraseña de forma asincrónica
    const hashPassword = await bcrypt.hash(password, 10);

    const SQLquery = {
      text: "INSERT INTO usuarios (email ,password, rol, lenguage) VALUES ( $1, $2, $3, $4) returning *;",
      values: [email, hashPassword, rol, lenguage],
    };
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.error("Error al registrar nuevo usuario:", error.message);
    throw error; // Relanzar el error capturado
  }
};
