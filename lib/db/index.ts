/**
 * Database Connection for Droply
 *
 * This file sets up the connection to our Neon PostgreSQL database using Drizzle ORM.
 * We're using the HTTP-based driver which is optimized for serverless environments.
 */

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

/**
 * Step 1: Create a SQL client using Neon's serverless driver
 *
 * The neon function creates a connection to our Neon PostgreSQL database.
 * It uses the DATABASE_URL environment variable which should contain your connection string.
 *
 * Example connection string format:
 * postgres://username:password@endpoint:port/database
 */
const sql = neon(process.env.DATABASE_URL!);

/**
 * Step 2: Initialize Drizzle ORM with our schema
 *
 * This creates a database client that we can use to interact with our database.
 * We pass in our schema so Drizzle knows about our table structure.
 */
export const db = drizzle(sql, { schema });

/*
 * Step 3: Export the SQL client for direct queries
 * const result = await sql`SELECT * FROM files WHERE user_id = ${userId}`;
*/
export { sql };