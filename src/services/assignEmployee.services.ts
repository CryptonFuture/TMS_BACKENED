import { IAssignEmployee } from '../models/assignEmployee.models';
import assignemployeeRepository from '../repository/assignemployee.repository';

class assignEmployeeService {
    public async getAllassignEmployee(): Promise<IAssignEmployee> {
        return assignemployeeRepository.getAll();
    }

    public async getassignEmployeeById(id: string): Promise<IAssignEmployee> {
        return assignemployeeRepository.getById(id);
    }

    public async createAssignEmployee(assignEmployee: IAssignEmployee): Promise<IAssignEmployee> {
        return assignemployeeRepository.create(assignEmployee);
    }

    public async updateAssignEmployee(id: string, assignEmployee: Partial<IAssignEmployee>): Promise<IAssignEmployee> {
        return assignemployeeRepository.update(id, assignEmployee);
    }

    public async deleteAssignEmployee(id: string): Promise<IAssignEmployee> {
        return assignemployeeRepository.delete(id);
    }
}

export default new assignEmployeeService();