import { IAssignEmployee } from '../models/assignEmployee.models';
import assignemployeeRepository from '../repository/assignemployee.repository';
import AssignEmployee from '../models/assignEmployee.models';


class AssignEmployeeService {

  public async getAllassignEmployee(): Promise<IAssignEmployee[]> {
    return assignemployeeRepository.getAll();
  }

  public async getassignEmployeeById(
    id: string
  ): Promise<IAssignEmployee | null> {
    return assignemployeeRepository.getById(id);
  }

  public async createAssignEmployee(assignEmployee: IAssignEmployee): Promise<IAssignEmployee> {
  const { userEmployeeId, clientId } = assignEmployee;

  // Max clients check
  const total = await AssignEmployee.countDocuments({
    userEmployeeId,
    is_deleted: false
  });

  if (total >= 3) {
    throw {
      status: 400,
      message: "This employee already has maximum clients assigned"
    };
  }

  // Duplicate client check
  const alreadyAssigned = await assignemployeeRepository.findOne({
    userEmployeeId,
    clientId,
    is_deleted: false
  });

  if (alreadyAssigned) {
    throw {
      status: 400,
      message: 'This client has already been assigned to the employee.'
    };
  }

  return assignemployeeRepository.create(assignEmployee);
}



  public async updateAssignEmployee(
    id: string,
    assignEmployee: Partial<IAssignEmployee>
  ): Promise<IAssignEmployee | null> {

    const { userEmployeeId, clientId } = assignEmployee;

    // 🔹 Duplicate check for edit
    if (userEmployeeId && clientId) {
      const alreadyAssigned = await assignemployeeRepository.findOne({
        userEmployeeId,
        clientId,
        _id: { $ne: id },
        is_deleted: false
      });

      if (alreadyAssigned) {
        throw {
          status: 400,
          message: 'This client has already been assigned to the employee.'
        };
      }
    }

    return assignemployeeRepository.update(id, assignEmployee);
  }


  public async deleteAssignEmployee(
    id: string
  ): Promise<IAssignEmployee | null> {
    return assignemployeeRepository.delete(id);
  }
}

export default new AssignEmployeeService();
