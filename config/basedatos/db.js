import pg  from 'pg';
import {db} from './config.js';

const pool = new pg.Pool(db);


pool.on("connect", () => console.log("♠ base de datos conectada exitosamente ♠"))
/* conexion a bd */

export default pool;