import { Request, Response } from 'express';
import taskServices from '../services/task.services';

class TaskController {
    public async getAllTask(req: Request, res: Response): Promise<any> {
        try {
            const task = await taskServices.getAllTask();
            res.status(200).json(task);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getTaskById(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const Task = await taskServices.getTaskById(id);
            if (!Task) {
                res.status(404).json({ message: 'Task not found' });
            } else {
                res.status(200).json(Task);
            }
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async createTask(req: Request, res: Response): Promise<any> {
        try {
            const newTask = await taskServices.createTask(req.body);
            res.status(201).json(newTask);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async updateTask(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const updatedtask = await taskServices.updateTask(id, req.body);
            if (!updatedtask) {
                res.status(404).json({ message: 'Task not found' });
            } else {
                res.status(200).json(updatedtask);
            }
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async deleteTask(req: Request, res: Response): Promise<any>  {
        const { id } = req.params;
        try {
            const deletedTask = await taskServices.deleteTask(id);
            if (!deletedTask) {
                res.status(404).json({ message: 'Task not found' });
            } else {
                res.status(200).json({ message: 'Task deleted successfully' });
            }
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

}

export default new TaskController();