import { Request, Response } from 'express';
import assignEmployeeServices from '../services/assignEmployee.services';

class assignEmployeeController {
    public async getAllassignEmployee(req: Request, res: Response): Promise<any> {
        try {
            const assignEmployee = await assignEmployeeServices.getAllassignEmployee();
            res.status(200).json(assignEmployee);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getAssignEmployeeById(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const assignEmployee = await assignEmployeeServices.getassignEmployeeById(id);
            if (!assignEmployee) {
                res.status(404).json({ message: 'assignEmployee not found' });
            } else {
                res.status(200).json(assignEmployee);
            }
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async createAssignEmployee(req: Request, res: Response): Promise<any> {
        try {
            const newAssignEmployee = await assignEmployeeServices.createAssignEmployee(req.body);
            res.status(201).json(newAssignEmployee);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async updateAssignEmployee(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const updatedAssignEmployee = await assignEmployeeServices.updateAssignEmployee(id, req.body);
            if (!updatedAssignEmployee) {
                res.status(404).json({ message: 'assignEmployee not found' });
            } else {
                res.status(200).json(updatedAssignEmployee);
            }
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async deleteAssignEmployee(req: Request, res: Response): Promise<any>  {
        const { id } = req.params;
        try {
            const deletedAssignEmployee = await assignEmployeeServices.deleteAssignEmployee(id);
            if (!deletedAssignEmployee) {
                res.status(404).json({ message: 'assignEmployee not found' });
            } else {
                res.status(200).json({ message: 'assignEmployee deleted successfully' });
            }
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

}

export default new assignEmployeeController();