import jwt from "jsonwebtoken";
import AppError from "../errors/AppError";

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token || !token.startsWith("Bearer ")) {
            throw new AppError(401, "Token de autenticação não fornecido");
        }

        const accessToken = token.split(" ")[1];

        jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                throw new AppError(401, "Token de autenticação inválido");
            }
            req.userId = decoded.id;
            next();
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message });
    }
};

export default isAuthenticated;
