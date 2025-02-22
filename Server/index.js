const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

let storedData = [];

app.post("/submit", (req, res) => {
  const receivedData = req.body;

  storedData = [...storedData, ...receivedData];
  console.log("Received Data:", storedData);
  res.json({ message: "Data received successfully" });
});

app.get("/", (req, res) => {
  res.json(storedData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
