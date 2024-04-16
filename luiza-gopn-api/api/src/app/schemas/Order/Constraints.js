const constraints = {
    name: {
        presence: {
            allowEmpty: false,
            message: "deve ser informado",
        },
        type: {
            type: "string",
            message: "deve ser uma string",
        },
    },
    value: {
        presence: {
            allowEmpty: false,
            message: "deve ser informado",
        },
        numericality: {
            greaterThan: 0,
            message: "deve ser maior que zero",
        },
    },
    quantity: {
        presence: {
            allowEmpty: false,
            message: "deve ser informado",
        },
        numericality: {
            onlyInteger: true,
            greaterThan: 0,
            message: "deve ser um número inteiro positivo",
        },
    },
};

export default constraints;
