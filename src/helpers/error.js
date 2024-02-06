// Constantes para códigos de estado HTTP
const HTTP_STATUS = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

// Arreglo de errores
const ERRORS = [
  { code: "AUTH_USER_NOT_FOUND", status: HTTP_STATUS.BAD_REQUEST, message: "El usuario no existe." },
  { code: "AUTH_INVALID_PASSWORD", status: HTTP_STATUS.BAD_REQUEST, message: "Contraseña inválida." },
  { code: "AUTH_MISSING_TOKEN", status: HTTP_STATUS.UNAUTHORIZED, message: "El token debe estar presente." },
  { code: "AUTH_INVALID_TOKEN", status: HTTP_STATUS.UNAUTHORIZED, message: "El token no es válido." },
];

export default ERRORS;
