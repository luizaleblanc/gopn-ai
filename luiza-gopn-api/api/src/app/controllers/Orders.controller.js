const chalk = require("chalk");
const OrderSchemas = require("../schemas/Order/OrderSchemas");
const OrdersService = require("../services/OrdersService");

class OrdersController {
    async createOrder(req, res) {
        try {
            const { name, quantity, productId } = req.body;
            const isInvalid = OrderSchemas.createOrderSchema(name, quantity);
            if (isInvalid) {
                const errors = {};
                Object.entries(isInvalid).forEach(([field, errorMessages]) => {
                    errors[field] = errorMessages.join(", ");
                });

                return res.status(400).json({ message: "Erro de validação", errors });
            }
            const response = await OrdersService.createOrder(
                name,
                quantity,
                productId
            );
            return res.status(201).json(response);
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message });
        }
    }
    
    async getAllOrders(req, res) {
        try {
            const orders = await OrdersService.getAllOrders();
            return res.status(200).json(orders);
        } catch(error) {
            return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }

    async getOrderById(req, res) {
        try {
            const orderId = req.params.id;
            const order = await OrdersService.findOrderById(orderId);
            if (!order) {
                return res.status(404).json({ message: "Pedido não encontrado" });
            }
            return res.status(200).json(order);
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }

    async updateOrder(req, res) {
        try {
            const orderId = req.params.id;
            const { name, quantity } = req.body;
            
            const isInvalid = OrderSchemas.createOrderSchema(name, quantity);
    
            if (isInvalid) {
                const errors = {};
                Object.entries(isInvalid).forEach(([field, errorMessages]) => {
                    errors[field] = errorMessages.join(", ");
                });
                
                return res.status(400).json({ message: "Erro de validação", errors });
            }
    
            const updatedOrder = await OrdersService.updateOrder(orderId, {
                name,
                quantity
            });
    
            console.log(chalk.blue(updatedOrder));
            return res.status(200).json(updatedOrder);
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }

    async cancelOrder(req, res) {
        try {
            const orderId = req.params.id;
            await OrdersService.cancelOrder(orderId);
            return res.status(204).send();
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }

    async acceptOrder(req, res) {
        try {
            const orderId = req.params.id;
            await OrdersService.acceptOrder(orderId);
            return res.status(200).json({ message: "Pedido aceito com sucesso" });
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }

    async deleteAcceptedOrder(req, res) {
        try {
            const orderId = req.params.id;
            await OrdersService.deleteAcceptedOrder(orderId);
            return res.status(204).send();
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message || "Erro interno do servidor" });
        }
    }
}

module.exports = new OrdersController();
