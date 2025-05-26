const express = require('express');
const bodyParser = require('body-parser');
const { handleWebhook } = require('./webhook/handler');
const { setWebhook } = require('./services/telegram');
const { WEBHOOK_SECRET, PORT } = require('./config');

const app = express();
app.use(bodyParser.json());

app.post(`/webhook/${WEBHOOK_SECRET}`, handleWebhook);

app.listen(PORT, async () => {
  console.log(`🚀 AddyBrew bot running on port ${PORT}`);
  await setWebhook();
});