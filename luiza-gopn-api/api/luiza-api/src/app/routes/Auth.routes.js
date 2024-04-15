import { Router } from "express";
import authController from "../controllers/Auth.controller";

const routes = Router();

routes.post("", authController.login)

export default routes;