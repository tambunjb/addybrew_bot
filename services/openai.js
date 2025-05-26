const axios = require('axios');
const { OPENAI_API_KEY } = require('../config');

async function getEmbedding(text) {
  const res = await axios.post(
    'https://api.openai.com/v1/embeddings',
    {
      model: 'text-embedding-3-small',
      input: text
    },
    {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return res.data.data[0].embedding;
}

module.exports = { getEmbedding };