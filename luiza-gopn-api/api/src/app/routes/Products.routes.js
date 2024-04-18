const { Router } = require("express");
const routes = Router();

const ProductsController = require("../controllers/Products.controller");
const isAdminAuthenticated = require("../middlewares/isAdminAuthenticated");
const isClientAuthenticated = require("../middlewares/isClientAuthenticated");

routes.post("", isAdminAuthenticated, ProductsController.createProduct);
routes.put("/:id", isAdminAuthenticated, ProductsController.updateProduct);
routes.delete("/:id", isAdminAuthenticated, ProductsController.deleteProduct);

routes.get("", (req, res, next) => {
    isAdminAuthenticated(req, res, (error) => {
        if (!error) {
            next();
        } else {
            isClientAuthenticated(req, res, next);
        }
    });
}, ProductsController.getAllProducts);

routes.get("/:id", (req, res, next) => {
    isAdminAuthenticated(req, res, (error) => {
        if (!error) {
            next();
        } else {
            isClientAuthenticated(req, res, next);
        }
    });
}, ProductsController.getProductById);

module.exports = routes;
