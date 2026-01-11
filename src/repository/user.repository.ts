import User, { IUser } from '../models/user.models';

class UserRepository {

  public async getAll(): Promise<any> {
    return User.find();
  }

  public async getById(id: string): Promise<any> {
    return User.findById(id);
  }

  // ✅ NEW: email check
  public async getByEmail(email: string): Promise<any> {
    return User.findOne({ email });
  }

  public async create(user: IUser): Promise<any> {
    const newUser = new User(user);
    return newUser.save();
  }

  public async update(id: string, user: Partial<IUser>): Promise<any> {
    return User.findByIdAndUpdate(id, user, { new: true });
  }

  public async delete(id: string): Promise<any> {
    return User.findByIdAndDelete(id);
  }
}

export default new UserRepository();
