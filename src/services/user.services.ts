import { IUser } from '../models/user.models'; 
import UserRepository from '../repository/user.repository';

class UserService {
    public async getAllUsers(): Promise<IUser> {
        return UserRepository.getAll();
    }

    public async getUserById(id: string): Promise<IUser> {
        return UserRepository.getById(id);
    }

    public async createUser(User: IUser): Promise<IUser> {
        return UserRepository.create(User);
    }

    public async updateUser(id: string, User: Partial<IUser>): Promise<IUser> {
        return UserRepository.update(id, User);
    }

    public async deleteUser(id: string): Promise<IUser> {
        return UserRepository.delete(id);
    }
}

export default new UserService();