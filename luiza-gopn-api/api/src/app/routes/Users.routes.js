const { Router } = require("express");
const routes = Router();

const UsersController = require("../controllers/Users.controller")
const isAuthenticated = require("../middlewares/MiddlewareAuth");
const EmailController = require("../controllers/Email.controller");


routes.post("", UsersController.createUser);
routes.get("",isAuthenticated, UsersController.getUserDataTokenBased);
routes.put("",isAuthenticated, UsersController.updateUser);
routes.delete("", isAuthenticated, UsersController.deleteUser);
routes.post("/send-recovery-code", EmailController.sendRecoveryCode);
routes.post("/update-password", EmailController.updatePasswordWithRecoveryCode)

module.exports = routes;