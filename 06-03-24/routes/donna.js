const express = require("express");
const router = express.Router();
const { tshirtDonnaData } = require("../data/tshirtDonnaData");

router.get("/", (req, res) => {
  res.json(tshirtDonnaData);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const tshirt = tshirtDonnaData.find((tshirt) => tshirt.id === parseInt(id));
  if (tshirt) {
    res.json(tshirt);
  } else {
    res.status(404).send("T-shirt non trovata");
  }
});

module.exports = router;
