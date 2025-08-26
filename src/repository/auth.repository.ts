import User, { IUser } from '../models/user.models';

class AuthRepository {

    public async findUserByUseremail(email: string): Promise<IUser | null> {
        return User.findOne({ email }); // Query the database for the user
    }

    

}
export default new AuthRepository();