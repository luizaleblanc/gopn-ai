import userService from "../services/Users.service";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AppError from "../errors/AppError";

class AuthController {
    async login(req, res) {
        try {
            console.log(req.body)
            const { mail, password } = req.body;

            const user = await userService.findUserByMail(mail);
            if (!user) {
                throw new AppError(401, "Credenciais inválidas");
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                throw new AppError(401, "Credenciais inválidas");
            }

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: '1h' 
            });

            return res.status(200).json({ token });
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message });
        }
    }
}

const authController = new AuthController();

export default authController;
