require('dotenv').config();

module.exports = {
  TELEGRAM_API: `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}`,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  WEBHOOK_URL: `${process.env.WEBHOOK_BASE}/webhook/${process.env.WEBHOOK_SECRET}`,
  PORT: process.env.PORT,
  DB_CONFIG: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  },
  WEBHOOK_SECRET: process.env.WEBHOOK_SECRET
};