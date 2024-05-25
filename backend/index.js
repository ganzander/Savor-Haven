require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const mongoConnection = require("./connections/mongoConnection");

const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", require("./routes/user"));
app.use("/", require("./routes/food"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
