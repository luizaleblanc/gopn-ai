const validate = require("validate.js");
const constraints = require("./Constraints");

class OrderSchemas {
    createOrderSchema(name, value, quantity) {
        const orderData = { name, value, quantity };
        const isInvalid = validate(orderData, constraints);
        return isInvalid;
    }
}

module.exports = new OrderSchemas();
