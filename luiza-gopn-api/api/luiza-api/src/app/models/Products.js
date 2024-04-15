import { Sequelize, Model, DataTypes } from "sequelize";

class Products extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                photoString: DataTypes.STRING,
                name: DataTypes.STRING,
                category: DataTypes.STRING,
                price: DataTypes.DECIMAL(10, 2),
                stock: DataTypes.INTEGER,
                description: DataTypes.TEXT
            },
            {
                sequelize,
            }
        );
    }
}

export default Products;
