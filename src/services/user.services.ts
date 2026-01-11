import { IUser } from '../models/user.models';
import UserRepository from '../repository/user.repository';

class UserService {

  public async getAllUsers() {
    return UserRepository.getAll();
  }

  public async getUserById(id: string) {
    return UserRepository.getById(id);
  }

  public async createUser(user: any) {

    // 🔴 password mismatch
    if (user.password !== user.confirmPass) {
      throw new Error('PASSWORD_MISMATCH');
    }

    // 🔴 duplicate email
    const existing = await UserRepository.getByEmail(user.email);
    if (existing) {
      throw new Error('EMAIL_EXISTS');
    }

    return UserRepository.create(user);
  }

  public async updateUser(id: string, user: Partial<IUser>) {
    return UserRepository.update(id, user);
  }

  public async deleteUser(id: string) {
    return UserRepository.delete(id);
  }
}

export default new UserService();
