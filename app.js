require("dotenv").config();
require("./serverDB");

const express = require("express");
const app = express();
const { errorHandler, urlHandler } = require("./middlewares/error-handler");

const parser = require("body-parser");
app.use(parser.json());

const userRoute = require("./routes/user-route");

app.use("/user", userRoute);

app.use(errorHandler);
app.use("*", urlHandler);

module.exports = { app };
