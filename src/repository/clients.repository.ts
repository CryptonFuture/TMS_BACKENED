import Clients, { IClientForm } from '../models/clients.models'

class ClientsRepository {
    public async getAll(): Promise<any> {
        return Clients.find();
    }

    public async getById(id: string): Promise<any> {
        return Clients.findById(id);

    }

    public async getByEmail(email: string): Promise<any> {
        return Clients.findOne({ email });
    }



    public async create(clients: IClientForm): Promise<any> {
        const newClients = new Clients(clients);
        return newClients.save();
    }

    public async update(id: string, clients: Partial<IClientForm>): Promise<any> {
        return Clients.findByIdAndUpdate(id, clients, { new: true });
    }

    public async delete(id: string): Promise<any> {
        return Clients.findByIdAndDelete(id);
    }

}
export default new ClientsRepository();