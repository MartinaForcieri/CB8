const express = require("express");
const router = express.Router();
const { tshirtBambinoData } = require("../data/tshirtBambinoData.json");

router.get("/", (req, res) => {
  res.json(tshirtBambinoData);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const tshirt = tshirtBambinoData.find((tshirt) => tshirt.id === parseInt(id));
  if (tshirt) {
    res.json(tshirt);
  } else {
    res.status(404).send("T-shirt non trovata");
  }
});

module.exports = router;
