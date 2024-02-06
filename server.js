import express from "express";
import { logger } from "logger-express";
import cors from "cors";
import { db, PORT } from "./config/basedatos/config.js";
import { router } from "./config/routes/routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger());
app.use(router);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).json({
    status: "error",
    message: "Ha ocurrido un error en el servidor. Por favor, inténtalo de nuevo más tarde.",
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://${db.host}:${PORT}`);
});
