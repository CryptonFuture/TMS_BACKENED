import express from 'express';
import userController from '../../controller/user.controller';

const UserRouter = express.Router();

// CRUD routes
UserRouter.get('/getall', userController.getAllUsers);
UserRouter.get('/getbyId/:id', userController.getUserById);
UserRouter.post('/create', userController.createUser);
UserRouter.put('/update/:id', userController.updateUser);
UserRouter.delete('/delete/:id', userController.deleteUser);

export default UserRouter;

 