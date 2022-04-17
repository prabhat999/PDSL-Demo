require("dotenv").config();
let app;

// Npm modules
const express = require("express");
const parser = require("body-parser");

// Load modules
// const routes = require("./routes");

// create app instance
app = express();

// json parsing
app.use(parser.json());

module.exports = { app };
