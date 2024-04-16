const sequelize = require("sequelize");

const connectionDatabase = require("../config/database");

const User = require("../app/models/Users");
const Product = require("../app/models/Products");
const Order = require("../app/models/Orders");

const models = [User, Order, Product];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new sequelize(connectionDatabase);
        models.map(model => model.init(this.connection));
        models.map(model => {
            if (model.associate) {
                model.associate(this.connection.models);
            }
        });
        this.connection.sync();
    }
}

module.exports = new Database()