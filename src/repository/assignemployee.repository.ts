import AssignEmployee, { IAssignEmployee } from '../models/assignEmployee.models';

class AssignEmployeeRepository {

public async getAll(): Promise<IAssignEmployee[]> {
  return AssignEmployee
    .find({ is_deleted: false })
    .populate('userEmployeeId', '_id name')
    .populate('clientId', '_id name')
    .populate('taskId', '_id name');
}

public async getById(id: string): Promise<IAssignEmployee | null> {
  return AssignEmployee
    .findById(id)
    .populate('userEmployeeId', '_id name')
    .populate('clientId', '_id name')
    .populate('taskId', '_id name')
}

  public async findOne(filter: any): Promise<IAssignEmployee | null> {
    return AssignEmployee.findOne(filter);
  }

  public async create(
    assignEmployee: IAssignEmployee
  ): Promise<IAssignEmployee> {
    const newAssignEmployee = new AssignEmployee(assignEmployee);
    return newAssignEmployee.save();
  }

  public async update(
    id: string,
    assignEmployee: Partial<IAssignEmployee>
  ): Promise<IAssignEmployee | null> {
    return AssignEmployee.findByIdAndUpdate(
      id,
      assignEmployee,
      { new: true }
    );
  }

  public async delete(id: string): Promise<IAssignEmployee | null> {
    return AssignEmployee.findByIdAndDelete(id);
  }
}

export default new AssignEmployeeRepository();
