import validate from "validate.js";
import constraints from "./Constraints";

class ProductSchemas {
    createProductSchema(name, category, price, stock, description) {
        const productData = { name, category, price, stock, description };
        const isInvalid = validate(productData, constraints);
        return isInvalid;
    }
}

export default new ProductSchemas();
