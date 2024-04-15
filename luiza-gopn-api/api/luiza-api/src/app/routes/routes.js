import { Router } from "express";
const routes = Router();

import AuthRoutes from "./Auth.routes";
import UserRoutes from "./User.routes";

routes.use("/auth", AuthRoutes);
routes.use("/user", UserRoutes);

export default routes;
