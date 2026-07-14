// config/db.js
import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
            host: "localhost",
            user: "postgres",        
            port: 5432,
            password: "Ankit@1234",
            database: "rainfall_data"
        });

        export { pool} 