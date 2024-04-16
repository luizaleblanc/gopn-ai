const UsersService = require("../services/Users.service")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppError = require("../errors/AppError");

class AuthController {
    async login(req, res) {
        try {
            console.log(req.body)
            const { mail, password } = req.body;

            const user = await UsersService.findUserByMail(mail);
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

module.exports = new AuthController();

