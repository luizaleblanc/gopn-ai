const { Sequelize, Model } = require("sequelize");
const bcrypt = require ("bcrypt");
const { v4: uuidv4 } = require("uuid");
const { profile, error } = require("console");

class Users extends Model {
    static init(sequelize){
        super.init(
            {
                mail: Sequelize.STRING,
                password: Sequelize.STRING,
                name: Sequelize.STRING,
                profilePhoto: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        this.addHook("beforeSave", async(user)=> {
            user.id = uuidv4();

            user.password = await bcrypt.hash(user.password, 8);
        });

        this.addHook("beforeUpdate", (options) => {
            if(options.fields.includes("id"))
                throw new Error("Requisição Inválida");
        });
    }
}

module.exports = Users;