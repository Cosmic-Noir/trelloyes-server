const express = require("express");

const cardRouter = express.Router();
const bodyParser = express.json();

cardRouter
  .route("/card")
  .get((req, res) => {
    // Code
  })
  .post(bodyParser, (req, res) => {
    // Code
  });

cardRouter
  .route("/card/:id")
  .get((req, res) => {
    // code
  })
  .delete((req, res) => {
    // code
  });

module.exports = cardRouter;
