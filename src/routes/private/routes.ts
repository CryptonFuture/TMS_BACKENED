import express from 'express';

import UserRouter from './user.routes';
import AuthRouter from '../public/auth.routes';
import AssignEmployeeRouter from './assignEmployee.routes';

const PrivateRoute = express.Router();


PrivateRoute.use('/User',UserRouter );
PrivateRoute.use('/Auth',AuthRouter );
PrivateRoute.use('/assignForm',AssignEmployeeRouter );





export default PrivateRoute;
