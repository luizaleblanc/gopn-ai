const jwt = require("jsonwebtoken");
const AppError = require("../errors/AppError");
const AdminUsersService = require("../services/AdminUsers.service");

const isAdminAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token || !token.startsWith("Bearer ")) {
            throw new AppError(401, "Token de autenticação não fornecido");
        }

        const accessToken = token.split(" ")[1];

        jwt.verify(accessToken, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                throw new AppError(401, "Token de autenticação inválido");
            }

            const userId = decoded.id;
            const user = await AdminUsersService.findUserById(userId);
            if (!user) {
                throw new AppError(403, "Acesso não autorizado. Você não é um administrador.");
            }

            req.userId = userId;
            next();
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message });
    }
};

module.exports = isAdminAuthenticated;
