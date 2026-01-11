import { Request, Response } from 'express';
import assignEmployeeServices from '../services/assignEmployee.services';

class AssignEmployeeController {

  public async getAllassignEmployee(req: Request, res: Response): Promise<any> {
    try {
      const assignEmployee =
        await assignEmployeeServices.getAllassignEmployee();

      res.status(200).json({
        success: true,
        data: assignEmployee
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Server Error'
      });
    }
  }

  public async getAssignEmployeeById(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    try {
      const assignEmployee =
        await assignEmployeeServices.getassignEmployeeById(id);

      if (!assignEmployee) {
        return res.status(404).json({
          success: false,
          message: 'AssignEmployee not found'
        });
      }

      res.status(200).json({
        success: true,
        data: assignEmployee
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Server Error'
      });
    }
  }

  public async createAssignEmployee(req: Request, res: Response): Promise<any> {
    try {
      const newAssignEmployee =
        await assignEmployeeServices.createAssignEmployee(req.body);

      res.status(201).json({
        success: true,
        message: 'Client has been successfully assigned to the employee.',
        data: newAssignEmployee
      });

    } catch (error: any) {

      if (error.status) {
        return res.status(error.status).json({
          success: false,
          message: error.message
        });
      }

      if (error.code === 11000) {
        return res.status(400).json({
          success: false,
          message: 'This client has already been assigned to the employee.'
        });
      }

      res.status(500).json({
        success: false,
        message: 'Server Error'
      });
    }
  }

  public async updateAssignEmployee(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    try {
      const updatedAssignEmployee =
        await assignEmployeeServices.updateAssignEmployee(id, req.body);

      if (!updatedAssignEmployee) {
        return res.status(404).json({
          success: false,
          message: 'AssignEmployee not found'
        });
      }

      res.status(200).json({
        success: true,
        message: 'AssignEmployee updated successfully',
        data: updatedAssignEmployee
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Server Error'
      });
    }
  }

  public async deleteAssignEmployee(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    try {
      const deletedAssignEmployee =
        await assignEmployeeServices.deleteAssignEmployee(id);

      if (!deletedAssignEmployee) {
        return res.status(404).json({
          success: false,
          message: 'AssignEmployee not found'
        });
      }

      res.status(200).json({
        success: true,
        message: 'AssignEmployee deleted successfully'
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Server Error'
      });
    }
  }
}

export default new AssignEmployeeController();
