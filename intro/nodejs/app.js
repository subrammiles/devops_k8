const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(process.env.APP_MESSAGE || 'Hello from Kubernetes 🚀');
});

app.get('/healthz', (req, res) => {
  res.status(200).send('ok');
});

app.get('/readyz', (req, res) => {
  res.status(200).send('ready');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
