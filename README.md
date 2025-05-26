# 🚨 NOTE: You Can Test My Live Bot @addybrew_bot

I have deployed this project publicly.  
👉 To test it directly, **just add `@addybrew_bot` to your Telegram group** and disable its privacy mode via [@BotFather](https://t.me/BotFather).  
The bot will store skincare product review messages and respond with ✅ confirmation.

## 🚧 Current Limitations
- 🗨️ **Single Chat Context Only**:  
  The bot currently only works with messages **contained within a single message**. It does not track or interpret intent spread across multiple sequential messages (i.e., no session or conversational memory yet).

---

# 🧠 AddyBrew Bot – Skincare Review Insight Bot

A Telegram bot that accepts user product reviews (currently focused on **skincare products**), processes them using OpenAI embeddings, and stores the insight in a PostgreSQL database.

---

## 📦 Features

- Telegram group bot webhook integration  
- OpenAI `text-embedding-3-small` support  
- PostgreSQL storage for review description and vector embedding  
- Automatically sets Telegram webhook on startup  

---

## 🛠️ Requirements

- Node.js v16 or newer  
- PostgreSQL  
- A Telegram Bot Token ([BotFather](https://t.me/BotFather))  
- OpenAI API Key  
- A public URL (e.g. [ngrok](https://ngrok.com) for local testing)  

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/tambunjb/addybrew_bot.git
cd addybrew-bot
```

### 2. Install dependencies

```
npm install
```

### 3. Create your `.env` file

This project includes a `.env.template` file. Just copy and rename it:

```
cp .env.template .env
```

Then fill in the required values:

```
PORT=3000
TELEGRAM_TOKEN=your_telegram_bot_token
OPENAI_API_KEY=your_openai_api_key
WEBHOOK_BASE=https://your-server-url-or-ngrok
WEBHOOK_SECRET=your_custom_secret_for_webhook

DB_HOST=localhost
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=your_db_name
```

---

### 4. Set up the PostgreSQL database

Run the migration script to create the required `products` table:

```
node migrate.js
```

This will create a table like:

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  embedding TEXT NOT NULL
);
```

> Embedding is stored as a stringified JSON array.

---

### 5. Run the bot

```
node src/index.js
```

You should see:

```
🚀 AddyBrew bot running on port 3000
✅ Webhook set: https://your-server-url/webhook/your_custom_secret_for_webhook
```

---

## 🤖 Testing the Bot

1. **Invite the bot to a Telegram group.**  
2. **Disable bot privacy** using [@BotFather](https://t.me/BotFather):  
   - Use `/setprivacy` command  
   - Choose your bot  
   - Set privacy to **Disabled**  

> This allows the bot to see all group messages without requiring `/` commands or mentions.

3. **Send a message to the group** (e.g., a review like:  
   `I’ve been using this face wash for a month and my skin feels smoother and less oily.`)  

4. The bot will analyze the review and reply with:

```
✅ Review insight stored.
```

---

## 📂 Project Structure

```
.
├── .env.template
├── migrate.js
├── src/
│   ├── config/         # Environment + config loader
│   ├── db/             # PostgreSQL connection
│   ├── services/       # OpenAI and Telegram API wrappers
│   ├── webhook/        # Telegram webhook handler
│   └── index.js        # App entry point
```

---

## 🧪 Optional: Use ngrok for local testing

```
npx ngrok http 3000
```

Use the generated HTTPS URL as your `WEBHOOK_BASE` in `.env`.

---

## 🔒 Notes

- This bot currently targets **skincare product** reviews specifically.
- Vector embedding is stored as stringified arrays (for compatibility).
- Be sure to **disable bot privacy** in the Telegram group for the bot to function without `/commands` or mentions.
- Your `.env` file contains sensitive information – do **not** commit it to version control.

---

## 🤝 License

MIT – free for personal or commercial use.