import pool from "../../config/basedatos/db.js";

export const forAuth = async (email) => {
  // Validar entrada
  if (!email) {
    throw new Error("El correo electrónico es obligatorio.");
  }

  try {
    const SQLquery = {
      text: "SELECT * FROM usuarios WHERE email = $1",
      values: [email],
    };
    const response = await pool.query(SQLquery);

    if (response.rows.length === 0) {
      throw new Error("No se encontró ningún usuario con el correo electrónico proporcionado.");
    }

    return response.rows[0];
  } catch (error) {
    console.error("Error al autenticar usuario:", error.message);
    throw new Error("Error al autenticar usuario: " + error.message);
  }
};
