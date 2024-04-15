import { Sequelize, Model, DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import Products from "./Products";

class Users extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true
                },
                mail: DataTypes.STRING,
                password: DataTypes.STRING,
                name: DataTypes.STRING,
                profilePhoto: DataTypes.STRING,
            },
            {
                sequelize,
            }
        );

        this.addHook("beforeSave", async (user) => {
            user.password = await bcrypt.hash(user.password, 8);
        });

        this.addHook("beforeUpdate", (user, options) => {
            if (options && options.fields && options.fields.includes("id")) {
                throw new Error("Requisição inválida");
            }
        });

        this.hasMany(Products, { foreignKey: 'userId', as: 'products', onDelete: 'CASCADE' });
    }
}

export default Users;
