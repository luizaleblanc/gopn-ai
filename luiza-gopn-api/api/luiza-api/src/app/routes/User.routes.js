import { Router } from "express";
import userController from "../controllers/Users.controller";
import isAuthenticated from "../middlewares/MiddlewareAuth";

const routes = Router();

routes.post("", userController.createUser);
routes.get("",isAuthenticated, userController.getUserDataTokenBased);
routes.put("",isAuthenticated, userController.updateUser);
routes.delete("", isAuthenticated, userController.deleteUser);
export default routes;
