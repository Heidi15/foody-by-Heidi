import { drizzle } from "drizzle-orm/neon-http"; 
import { neon } from "@neondatabase/serverless";
import { ENV } from "./env.js";
import * as schema from "../db/schema.js"; 

const sql = neon(ENV.DATABASE_URL);
export const db = drizzle(sql, { schema });

//Ce fichier établit la connexion entre le serveur Node.js et la  * base de données PostgreSQL hébergée sur Neon.
 