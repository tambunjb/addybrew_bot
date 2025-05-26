require('dotenv').config();
const fs = require('fs');
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

async function runMigration() {
  try {
    const sql = fs.readFileSync('./migrations/001_create_products.sql', 'utf8');
    await pool.query(sql);
    console.log('✅ Migration applied');
  } catch (err) {
    console.error('❌ Migration error:', err);
  } finally {
    await pool.end();
  }
}

runMigration();