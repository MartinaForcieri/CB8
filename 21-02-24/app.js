const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  res.send("Benvenuto all'endpoint principale della tua API!");
});

app.get("/libri", (req, res) => {
  res.json(data);
});

app.get("/api/libri", (req, res) => {
  const newBook = books.map((data) => {
    const { id, title } = data;
    return { id, title };
  });
  res.json(newBook);
});

app.get("/api/libri/:id", (req, res) => {
  const resourceId = parseInt(req.params.id);
  const resource = resources.find((resource) => resource.id === resourceId);
  if (!resource) {
    return res.status(404).json({ error: "Risorsa non trovata" });
  }
  res.json(resource);
});

app.get("/api/libri/search", (req, res) => {
  const keyword = req.query.title;

  const filteredResources = resources.filter(
    (resource) =>
      resource.name.includes(keyword) || resource.description.includes(keyword)
  );

  res.json(filteredResources);
});

app.get("/api/libri/:title([a-zA-Z]{1,4})", (req, res) => {
  let paramSize = req.params.title.length;
  console.log(paramSize);
  res.send(
    `Il valore indicato è: ${req.params.title} ed è lungo: ${paramSize} caratteri`
  );
});

app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});
