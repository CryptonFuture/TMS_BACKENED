import  AssignEmployee,{ IAssignEmployee } from '../models/assignEmployee.models';

class AssignEmployeeRepository {
    public async getAll(): Promise<any> {
        return AssignEmployee.find().populate('userEmployeeId');
    }

    public async getById(id: string): Promise<any> {
        return AssignEmployee.findById(id).populate('userEmployeeId');
        
        }


    public async create(assignEmployee: IAssignEmployee): Promise<any> {
        const newAssignEmployee = new AssignEmployee(assignEmployee);
        return newAssignEmployee.save();
    }

    public async update(id: string, assignEmployee: Partial<IAssignEmployee>): Promise<any> {
        return AssignEmployee.findByIdAndUpdate(id, assignEmployee, { new: true });
    }

    public async delete(id: string): Promise<any> {
        return AssignEmployee.findByIdAndDelete(id);
    }
 
}
export default new AssignEmployeeRepository();