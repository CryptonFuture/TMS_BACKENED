import express from 'express';
import taskController from '../../controller/task.controller';

const TaskRouter = express.Router();

// CRUD routes
TaskRouter.get('/getall', taskController.getAllTask);
TaskRouter.get('/getbyId/:id', taskController.getTaskById);
TaskRouter.post('/create', taskController.createTask);
TaskRouter.put('/update/:id', taskController.updateTask);
TaskRouter.delete('/delete/:id', taskController.deleteTask);

export default TaskRouter;

 