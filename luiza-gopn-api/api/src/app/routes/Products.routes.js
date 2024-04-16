const { Router } = require("express");
const routes = Router();

const ProductsController = require("../controllers/ProductsController");
const isAuthenticated = require("../middlewares/MiddlewareAuth");

routes.post("", isAuthenticated, ProductsController.createProduct);
routes.get("", isAuthenticated, ProductsController.getAllProducts);
routes.get("/:id", isAuthenticated, ProductsController.getProductById);
routes.put("/:id", isAuthenticated, ProductsController.updateProduct);
routes.delete("/:id", isAuthenticated, ProductsController.deleteProduct);

module.exports = routes;
