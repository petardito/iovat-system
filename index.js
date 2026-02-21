const express = require("express");
const app = express();

app.use(express.json());

let ledger = [];

app.get("/", (req, res) => {
  res.send("IOVAT API funcionando 🚀");
});

app.get("/ledger", (req, res) => {
  res.json(ledger);
});

app.post("/ledger", (req, res) => {
  const entry = req.body;
  ledger.push(entry);
  res.json({ message: "Guardado", entry });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
