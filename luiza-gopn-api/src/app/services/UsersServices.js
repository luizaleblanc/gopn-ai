class UsersService {
    async findUserById(id){
        return false;
    }

    async createUser(mail, password, name, photoString){
        try {
            const userAlreadyExist = await this.findUserByMail(mail);
            if (userAlreadyExist)
                throw new AppError(409, "Email já cadastrado!");

            const profilePhoto = await FirebaseManager.sendFileToFirebase(
                "example-url",
                photoString,
                "image/jpeg"
            );

            await Users.create({
                mail,
                password,
                name,
                profilePhoto
            });

            return { message: "Usuário criado com sucesso" };
        } catch (error) {
            throw new AppError(error.statusCode, error.message);
        }
    }
}