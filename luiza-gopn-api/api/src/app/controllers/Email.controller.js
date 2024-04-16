const UsersService = require("../services/Users.service");
const EmailService = require("../services/Email.service");
const AppError = require("../errors/AppError");

class EmailController {
    async sendRecoveryCode(req, res) {
        try {
            const { email } = req.body;

            const user = await UsersService.findUserByMail(email);
            if (!user) {
                throw new AppError(404, "Usuário não encontrado");
            }

            const recoveryCode = EmailService.generateRandomCode();

            user.recoveryCode = recoveryCode;
            await user.save();

            await EmailService.sendEmailRecoveryCode(email, recoveryCode);

            return res.status(200).json({ message: "Código de recuperação enviado com sucesso" });
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message });
        }
    }

    async updatePasswordWithRecoveryCode(req, res) {
        try {
            const { email, recoveryCode, newPassword } = req.body;

            const user = await UsersService.findUserByMail(email);
            if (!user) {
                throw new AppError(404, "Usuário não encontrado");
            }

            if (user.recoveryCode !== recoveryCode) {
                throw new AppError(400, "Código de recuperação inválido");
            }

            await UsersService.updateUserPassword(user.id, newPassword);

            user.recoveryCode = null;
            await user.save();

            return res.status(200).json({ message: "Senha atualizada com sucesso" });
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message });
        }
    }
}

module.exports = new EmailController();
