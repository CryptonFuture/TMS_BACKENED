import express from 'express';

import UserRouter from './user.routes';
import AuthRouter from '../public/auth.routes';
import AssignEmployeeRouter from './assignEmployee.routes';
import TaskRouter from './task.routes';
import ClientsRouter from './clients.routes';


const PrivateRoute = express.Router();


PrivateRoute.use('/User',UserRouter );
PrivateRoute.use('/Auth',AuthRouter );
PrivateRoute.use('/assignForm',AssignEmployeeRouter );
PrivateRoute.use('/Task',TaskRouter );
PrivateRoute.use('/Clients',ClientsRouter );





export default PrivateRoute;
