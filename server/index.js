require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");
const port = 4028;
const controller = require("./controller");
const app = express();
const massive = require("massive");

app.use(body_parser.json());
// app.use(express.static(__dirname + "/../public/build"));

app.get("/api/inventory", controller.read);

app.post("/api/product", controller.create);

massive(process.env.CONNECTION_STRING)
  .then(db => {
    console.log(db);
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Simulation 1 Server is up on port: ${port}`);
});
