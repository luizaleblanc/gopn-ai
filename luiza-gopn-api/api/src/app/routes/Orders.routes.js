const { Router } = require("express");
const OrdersController = require("../controllers/OrdersController");

const routes = Router();

routes.post("", OrdersController.createOrder);
routes.get("", OrdersController.getAllOrders);
routes.get("/:id", OrdersController.getOrderById);
routes.put("/:id", OrdersController.updateOrder);
routes.delete("/:id", OrdersController.cancelOrder);
routes.post("/accept/:id", OrdersController.acceptOrder);
routes.delete("/finalize/:id", OrdersController.finalizeOrder);

module.exports = routes;
