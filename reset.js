const fs = require("fs");
const SESSION_FILE_PATH = "./whatsapp-session.json";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (fs.existsSync(SESSION_FILE_PATH)) {
  console.log(
    "Are you sure want to reset whatsapp client session? (you might need to scan again)"
  );

  readline.question(`type (yes) to reset... `, (yesNo) => {
    if (yesNo === "yes") {
      fs.unlink(SESSION_FILE_PATH, (err) => {
        if (err) throw err;
        console.log("Client Reset Done!");
      });
    } else {
      console.log("Cancel reset client process");
    }
    readline.close();
  });
} else {
  readline.question("No Session Detected", () => {
    readline.close();
  });
}
