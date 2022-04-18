const express = require("express");
const router = express.Router();

const { validateUser } = require("../middlewares/validate-users");
const userSchema = require("../models/user-model");

const { registerUser } = require("../controllers/user-controller");

// const { authenticate } = require("../middlewares/authenticate");

router.post("/", validateUser(userSchema), registerUser);

module.exports = router;
