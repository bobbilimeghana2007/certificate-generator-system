const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let certificates = [];

app.post("/certificate", (req, res) => {
  const cert = {
    id: Date.now(),
    name: req.body.name,
    course: req.body.course
  };

  certificates.push(cert);
  res.json(cert);
});

app.get("/certificates", (req, res) => {
  res.json(certificates);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});