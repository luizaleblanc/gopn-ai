import { Sequelize } from "sequelize";
import DatabaseConfig from "../config/database";
import Products from "../app/models/Products";
import Users from "../app/models/Users";

const models = [Products, Users];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(DatabaseConfig);
        models.map(model => model.init(this.connection));
        models.map(model => {
            if (model.associate) {
                model.associate(this.connection.models);
            }
        });
        this.connection.sync();
    }
}

export default new Database();
