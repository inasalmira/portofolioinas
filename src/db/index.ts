import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";

let db: any = null;

// Initialize database only when needed (runtime, not build time)
export function getDb() {
  if (!db) {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error('DATABASE_URL environment variable is not set. Please configure it in Railway.');
    }
    db = drizzle(databaseUrl);
  }
  return db;
}

// Re-export for backward compatibility
export default getDb;