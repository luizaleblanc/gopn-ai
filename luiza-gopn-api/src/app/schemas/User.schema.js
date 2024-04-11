const validate = require("validade.js")

const constraints = require("./Constraints")

class UserSchemas{
    createUserSchema(mail, password, name, photoString){
        const isInvalid = validate(
            {mail, password, name, photoString},
            {
                mail: constraints.mail,
                password: constraints.password,
                name: constraints.name,
                photoString: constraints.photoString,
            }
        );

        return isInvalid;
    }
}

module.exports = new UserSchemas();
