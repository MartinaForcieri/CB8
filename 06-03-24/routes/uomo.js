const express = require("express");
const router = express.Router();
const { tshirtUomoData } = require("../data/tshirtUomoData");

router.get("/", (req, res) => {
  res.json(tshirtUomoData);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const tshirt = tshirtUomoData.find((tshirt) => tshirt.id === parseInt(id));
  if (tshirt) {
    res.json(tshirt);
  } else {
    res.status(404).send("T-shirt non trovata");
  }
});

module.exports = router;
