const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const client = require("../database");
const { loginController, registerController } = require("../controller/auth");

router.post("/register", async (req, res) => {
  try {
    registerResponse = await registerController(req, res);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    loginResponse = await loginController(req, res);
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = router;
