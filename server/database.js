/**
 * Copyright (c) 2025 NPS. All rights reserved.
 * 
 * This script is part of the NPS project and is proprietary software.
 * Unauthorized copying or distribution of this file, via any medium,
 * is strictly prohibited. Licensed under Proprietary Software. Unauthorized copying or distribution is prohibited.
 * 
 * Author: Eng Ibn Muzamir
 */


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
