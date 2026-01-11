import express from 'express';
import clientsController from '../../controller/clients.controller';

const ClientsRouter = express.Router();

// CRUD routes
ClientsRouter.get('/getall', clientsController.getAllClients);
ClientsRouter.get('/getbyId/:id', clientsController.getClientsById);
ClientsRouter.post('/create', clientsController.createClients);
ClientsRouter.put('/update/:id', clientsController.updateClients);
ClientsRouter.delete('/delete/:id', clientsController.deleteClients);

export default  ClientsRouter;
