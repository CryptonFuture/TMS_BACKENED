import { IClientForm } from '../models/clients.models';
import clientsRepository from '../repository/clients.repository';

class clientsService {
    public async getAllClients(): Promise<IClientForm> {
        return clientsRepository.getAll();
    }

    public async getClientsById(id: string): Promise<IClientForm> {
        return clientsRepository.getById(id);
    }

    public async createClients(clients: any) {

        if (clients.password !== clients.confirmPass) {
            throw new Error('PASSWORD_MISMATCH');
        }

        const existing = await clientsRepository.getByEmail(clients.email);
        if (existing) {
            throw new Error('EMAIL_EXISTS');
        }

        return clientsRepository.create(clients);
    }

    public async updateClients(id: string, clients: Partial<IClientForm>): Promise<IClientForm> {
        return clientsRepository.update(id, clients);
    }

    public async deleteClients(id: string): Promise<IClientForm> {
        return clientsRepository.delete(id);
    }
}

export default new clientsService();