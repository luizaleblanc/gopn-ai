const AppError = require("./AppError");

class ValidationError extends AppError {
    constructor(message, statusCode = 400, errors) {
        super(message, statusCode);
        this.errors = errors;
    }
}

module.exports = ValidationError;