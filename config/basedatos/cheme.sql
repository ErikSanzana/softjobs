CREATE DATABASE softjobs;

\ c softjobs;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- saque referencias de buenas practidas... aun que por el desafio no puedo separar la contraseña en otra tabla  como lo sugeria...  
CREATE TABLE usuarios (
    pk_id        SERIAL      PRIMARY KEY UNIQUE,
    id           uuid DEFAULT uuid_generate_v4() NOT NULL UNIQUE,
    email        VARCHAR(50) NOT NULL UNIQUE,
    password     VARCHAR(80) NOT NULL,
    rol          VARCHAR(60) NOT NULL,
    lenguage     VARCHAR(20) NOT NULL,
    created_at   TIMESTAMP   NOT NULL DEFAULT NOW(),
    updated_at   TIMESTAMP   NOT NULL DEFAULT NOW()
);

--test
INSERT INTO usuarios (email ,password, rol, lenguage) VALUES ( 1, '2', 3, '4') returning *; 


SELECT * FROM usuarios;