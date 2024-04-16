const { Router } = require("express");
const routes = Router();

const AuthRoutes = require("./Auth.routes");
const UserRoutes = require("./Users.routes");
const ProductRoutes = require("./Products.routes");
const OrderRoutes = require("./Orders.routes");

routes.use("/auth", AuthRoutes);
routes.use("/user", UserRoutes);
routes.use("/product", ProductRoutes);
routes.use("/order", OrderRoutes);

module.exports = routes;