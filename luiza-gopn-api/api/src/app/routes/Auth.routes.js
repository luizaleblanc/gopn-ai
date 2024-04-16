const express = require("express");
const authController = require("../controllers/Auth.controller");

const routes = express.Router();

routes.post("", authController.login);

module.exports = routes;
