import pg from "pg";
import dotenv, { config } from "dotenv";

dotenv.config();

const { Pool } = pg;

const configDatabase ={
    connectionString: process.env.DATABASE_URL
}

if(process.env.MODE === 'prod') config.database.ssl = true;

const db = new Pool(configDatabase);

export default db