const express = require("express");

const app = express();

const PORT = Number(process.env.PORT || 3000);
const APP_MESSAGE = process.env.APP_MESSAGE || "Hello from Node.js";

app.get("/", (req, res) => {
  res.send(`${APP_MESSAGE}. Listening on port ${PORT}`);
});

// The web-app container calls the sidecar container.
app.get("/call-sidecar", async (req, res) => {
  try {
    const response = await fetch("http://127.0.0.1:3001");
    const message = await response.text();

    res.send(`Web App received: ${message}`);
  } catch (error) {
    res.status(500).send(`Sidecar request failed: ${error.message}`);
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`${APP_MESSAGE} - listening on port ${PORT}`);
});