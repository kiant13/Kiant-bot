const express = require('express');
const app = express();
app.use(express.json());
const VERIFY_TOKEN = "kiant123";

app.get('/webhook', (req, res) => {
  if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === VERIFY_TOKEN) {
    res.status(200).send(req.query['hub.challenge']);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook', (req, res) => {
  console.log('Pesan WA masuk!');
  console.log(JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.get('/', (req, res) => res.send('Kiant Bot Aktif!'));
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log('Jalan di ' + PORT));
