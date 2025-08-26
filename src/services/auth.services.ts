import { IUser } from '../models/user.models';
import AuthRepository from '../repository/auth.repository';

class AuthService {

    public async login(email: string, password: string): Promise<{ token: string; user: IUser }> {
        // Find the user by username
        const user = await AuthRepository.findUserByUseremail(email);

        if (!user) {
            throw new Error('Invalid username or password'); // User not found
        }

               const isPasswordValid = user.password === password;

       
        if (!isPasswordValid) {
            throw new Error('Invalid email or password'); 
        }
        
        if (user.status === "unactive") {
      throw new Error('User is inactive, please contact admin');
    }



       
        const token = "";
        return { token, user }; 
    }
  
    
}

export default new AuthService();