import { Request, Response } from 'express';
import clientsServices from '../services/clients.services';

class clientsController {
    public async getAllClients(req: Request, res: Response): Promise<any> {
        try {
            const clients = await clientsServices.getAllClients();
            res.status(200).json(clients);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getClientsById(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const clients = await clientsServices.getClientsById(id);
            if (!clients) {
                res.status(404).json({ message: 'clients not found' });
            } else {
                res.status(200).json(clients);
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

       public async createClients(req: Request, res: Response): Promise<any> {
      try {
        const newClients = await clientsServices.createClients(req.body);
        res.status(201).json(newClients);
    
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


    public async updateClients(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const updatedClients = await clientsServices.updateClients(id, req.body);
            if (!updatedClients) {
                res.status(404).json({ message: 'clients not found' });
            } else {
                res.status(200).json(updatedClients);
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async deleteClients(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        try {
            const deletedClients = await clientsServices.deleteClients(id);
            if (!deletedClients) {
                res.status(404).json({ message: 'clients not found' });
            } else {
                res.status(200).json({ message: 'clients deleted successfully' });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

}
export default new clientsController();


