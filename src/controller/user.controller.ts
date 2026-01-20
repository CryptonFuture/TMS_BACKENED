import { Request, Response } from 'express';
import UserService from '../services/user.services';

class UserController {
    public async getAllUsers(req: Request, res: Response): Promise<any> {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getUserById(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const User = await UserService.getUserById(id);
            if (!User) {
                res.status(404).json({ message: 'User not found' });
            } else {
                res.status(200).json(User);
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async createUser(req: Request, res: Response): Promise<any> {
        try {
            const newUser = await UserService.createUser(req.body);
            res.status(201).json(newUser);

        } catch (error: any) {

            if (error.message === 'EMAIL_EXISTS') {
                return res.status(400).json({
                    field: 'email',
                    message: 'Email already exists'
                });
            }

            if (error.message === 'PASSWORD_MISMATCH') {
                return res.status(400).json({
                    field: 'password',
                    message: 'Password and Confirm Password do not match'
                });
            }

            res.status(500).json({ message: error.message });
        }
    }


    public async updateUser(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const updatedUser = await UserService.updateUser(id, req.body);
            if (!updatedUser) {
                res.status(404).json({ message: 'User not found' });
            } else {
                res.status(200).json(updatedUser);
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const deletedUser = await UserService.deleteUser(id);
            if (!deletedUser) {
                res.status(404).json({ message: 'User not found' });
            } else {
                res.status(200).json({ message: 'User deleted successfully' });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getAvailableEmployees(req: Request, res: Response): Promise<any> {
        try {
            const users = await UserService.getAvailableEmployees();
            res.status(200).json(users);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }


}

export default new UserController();