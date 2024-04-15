import AppError from "../errors/AppError";
import Products from "../models/Products";

class ProductsService {
    async findProductById(id){
        const product = await Products.findByPk(id);
        return product;
    }

    async createProduct(name, category, price, stock) {
        try {
            const productAlreadyExist = await Products.findOne({ where: { name } });
            if (productAlreadyExist) {
                throw new AppError(409, "Produto já cadastrado!");
            }

            await Products.create({
                name,
                category,
                price,
                stock
            });
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async getAllProducts() {
        try {
            const products = await Products.findAll();
            return products;
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async deleteProduct(id) {
        try {
            const product = await Products.findByPk(id);
            if (!product) {
                throw new AppError(404, "Produto não encontrado!");
            }

            await Products.destroy({ where: { id } });
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async updateProduct(id, newData) {
        try {
            const product = await Products.findByPk(id);
            if (!product) {
                throw new AppError(404, "Produto não encontrado!");
            }

            await Products.update(newData, { where: { id } });
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }
}

const productService = new ProductsService();

export default productService;
