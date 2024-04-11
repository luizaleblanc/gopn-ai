class UsersController{
    async createUser(req, res){
        try {
            const {mail, password, name, photoString} = req.body;

            const isInvalid = UserSchemas.createUserSchema(
                mail,
                password,
                name,
                photoString
            );

            if(isInvalid) throw new AppError(400, isInvalid);

            const response = await UsersService.createUser(
                mail,
                password,
                name,
                photoString
            );

            return res.status(201).json(response);
        } catch (error) {
            return res.status(error.statusCode).json({ message: error.message })
        }
    }
}