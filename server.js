const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

//routers
const routeRapport = require("./routes/rapports");
const routeClient = require("./routes/clients");
const routeUser = require("./routes/users");

//create server
const app = express();
const port = process.env.PORT || 3000;

// connect DB
const dbURI = process.env.ATLAS_URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port);
  })
  .catch((error) => res.status(400).json(`not connected ${error.message}`));

// requests
app.use("/rapports", routeRapport);
app.use("/clients", routeClient);
app.use("/users", routeUser);

app.use((req, res) => {
  res.status(404).send("404");
});
