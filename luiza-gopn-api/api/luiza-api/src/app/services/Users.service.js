import AppError from "../errors/AppError";
import Users from "../models/Users";

class UsersService {
    async findUserById(id){
        const user = await Users.findByPk(id);
        return user;
    }
    
    async findUserByMail(mail){
        const user = await Users.findOne({ where: { mail } });
        return user;
    }

    async createUser(mail, password, name, photoString) {
        try {
            const userAlreadyExist = await this.findUserByMail(mail);
            if (userAlreadyExist) {
                throw new AppError(409, "Email já cadastrado!");
            }

            const profilePhoto = photoString;

            await Users.create({
                mail,
                password,
                name,
                profilePhoto
            });
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }

    async updateUser(id, newData) {
        try {
            const user = await Users.findByPk(id);
            
            if (!user) {
                throw new AppError(404, "Usuário não encontrado!");
            }
    
            await user.update(newData);
    
            return user;
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }
    

    async deleteUser(id) {
        try {
            const user = await Users.findByPk(id);
            if (!user) {
                throw new AppError(404, "Usuário não encontrado!");
            }

            await Users.destroy({ where: { id } });
        } catch (error) {
            throw new AppError(error.statusCode || 500, error.message || "Erro interno do servidor");
        }
    }
}

const userService = new UsersService();

export default userService;
