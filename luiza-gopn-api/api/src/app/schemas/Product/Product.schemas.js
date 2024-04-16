const validate = require("validate.js");
const constraints = require("./Constraints");

class ProductSchemas {
    createProductSchema(name, category, price, stock, description) {
        const productData = { name, category, price, stock, description };
        const isInvalid = validate(productData, constraints);
        return isInvalid;
    }
}

module.exports = new ProductSchemas();