import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    password: "Planchinobo256",
    host: "localhost",
    port: "5432",
    database: "nps_website"
})

export default pool;
