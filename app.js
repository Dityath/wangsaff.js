const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const fs = require("fs");
const axios = require("axios");

const SESSION_FILE_PATH = "./whatsapp-session.json";

let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
  sessionCfg = require(SESSION_FILE_PATH);
}

const client = new Client({
  puppeteer: {
    headless: true,
  },
  session: sessionCfg,
});

client.on("qr", (qr) => {
  console.log("QR RECEIVED", qr);
  qrcode.generate(qr, { small: true });
});

client.on("authenticated", (session) => {
  console.log("AUTHENTINCATED", session);
  sessionCfg = session;
  fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
    if (err) {
      console.log(err);
    }
  });
});

client.on("ready", () => {
  console.log("Client Is Ready!");
});

client.on("message", async (msg) => {
  const chat = await msg.getChat();
  const user = await msg.getContact();

  if (msg.body.includes("!nama")) {
    await chat.sendMessage(`Hello @${user.id.user}`, {
      mentions: [user],
    });
  } else {
    await client.sendMessage(msg.from, "unknown command");
  }
});

client.initialize();
