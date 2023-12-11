const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/:id", (req, res) => {
  const options = {
    param: req.params,
    query: req.query,
    body: req.body,
    headers: req.headers,
  };

  res.status(200).json({ mensaje: "bienvenido a la API DE NODE.JS" });
});

module.exports = app;
