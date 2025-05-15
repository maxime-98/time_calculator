const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/calculate", (req, res) => {
  const { currentTime, duration, operation } = req.body;

  if (!currentTime || !duration || !operation) {
    return res.status(400).json({ error: "Champs manquants" });
  }

  // Extraction des composants de date manuellement
  const [datePart, timePart] = currentTime.split("T");
  const [year, month, day] = datePart.split("-");
  const [hour, minute] = timePart.split(":");

  const date = new Date();
  date.setFullYear(parseInt(year));
  date.setMonth(parseInt(month) - 1); // mois commence à 0
  date.setDate(parseInt(day));
  date.setHours(parseInt(hour));
  date.setMinutes(parseInt(minute));

  if (operation === "add") {
    date.setMinutes(date.getMinutes() + parseInt(duration));
  } else if (operation === "subtract") {
    date.setMinutes(date.getMinutes() - parseInt(duration));
  } else {
    return res.status(400).json({ error: "Opération invalide" });
  }

  // Formatage en heure locale (sans timezone)
  const result = {
    date: date.toLocaleDateString("fr-FR"),
    time: date.toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit' }),
  };

  return res.json({ result });
});

app.listen(PORT, () => {
  console.log(`API Time Server running on http://localhost:${PORT}`);
});
