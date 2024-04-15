import validate from "validate.js";
import constraints from "./Constraints";

class UserSchemas {
    createUserSchema(mail, password, name, photoString) {

        const isInvalid = validate(
            { mail, password, name, photoString },
            constraints
        );


        return isInvalid;
    }
}


export default new UserSchemas();