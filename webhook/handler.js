const db = require('../db/pool');
const { getEmbedding } = require('../services/openai');
const { sendMessage } = require('../services/telegram');

async function handleWebhook(req, res) {
  const msg = req.body.message;
  if (!msg || msg.from.is_bot) return res.sendStatus(200);

  const reviewText = msg.text;
  const chatId = msg.chat.id;

  try {
    const vector = await getEmbedding(reviewText);
    await db.query(
      'INSERT INTO products (description, embedding) VALUES ($1, $2)',
      [reviewText, `[${vector.join(',')}]`]
    );
    await sendMessage(chatId, '✅ Review insight stored.');
  } catch (err) {
    console.error('❌ Error:', err?.response?.data || err);
  }

  res.sendStatus(200);
}

module.exports = { handleWebhook };