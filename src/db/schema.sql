CREATE TABLE IF NOT EXISTS users (
    id UUID NOT NULL DEFAULT gen_random_uuid(),
    username VARCHAR(40) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    latest_10 real[] DEFAULT array[]::real[],
    top_10 real[] DEFAULT array[]::real[],
    PRIMARY KEY(id)
);