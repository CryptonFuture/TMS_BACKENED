import User from '../models/user.models';
import AssignEmployee from '../models/assignEmployee.models';

class UserRepository {

  public async getAll(): Promise<any> {
    return User.find();
  }

  public async getById(id: string): Promise<any> {
    return User.findById(id);
  }

  public async getByEmail(email: string): Promise<any> {
    return User.findOne({ email });
  }

  public async create(user: any): Promise<any> {
    const newUser = new User(user);
    return newUser.save();
  }

  public async update(id: string, user: any): Promise<any> {
    return User.findByIdAndUpdate(id, user, { new: true });
  }

  public async delete(id: string): Promise<any> {
    return User.findByIdAndDelete(id);
  }

 public async getAvailableEmployees() {
    const employees = await User.find({ status: 'Active', is_deleted: false });
    const MAX_CLIENTS = 3;

    // Map employees with assigned clients count
    const result = await Promise.all(
      employees.map(async (emp) => {
        const assignedCount = await AssignEmployee.countDocuments({
          userEmployeeId: emp._id,
          is_deleted: false
        });

        // Only return employees who have < MAX_CLIENTS
        if (assignedCount < MAX_CLIENTS) {
          return {
            _id: emp._id,
            name: emp.name,
            email: emp.email,
            phone: emp.phone,
            address: emp.address,
            department: emp.department,
            designName: emp.designName,
            joiningDate: emp.joiningDate,
            description: emp.description,
            status: emp.status,
            assignedCount,
            maxClients: MAX_CLIENTS
          };
        } else {
          return null;
        }
      })
    );

    return result.filter((e) => e !== null);
  }

}

export default new UserRepository();
