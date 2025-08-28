import express from 'express';
import assignEmployeeController from '../../controller/assignEmployee.controller';

const AssignEmployeeRouter = express.Router();

// CRUD routes
AssignEmployeeRouter.get('/getall', assignEmployeeController.getAllassignEmployee);
AssignEmployeeRouter.get('/getbyId/:id', assignEmployeeController.getAssignEmployeeById);
AssignEmployeeRouter.post('/create', assignEmployeeController.createAssignEmployee);
AssignEmployeeRouter.put('/update/:id', assignEmployeeController.updateAssignEmployee);
AssignEmployeeRouter.delete('/delete/:id', assignEmployeeController.deleteAssignEmployee);

export default AssignEmployeeRouter;

 