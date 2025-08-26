import express from 'express';

import UserRouter from './user.routes';
import AuthRouter from '../public/auth.routes';

const PrivateRoute = express.Router();


PrivateRoute.use('/User',UserRouter );
PrivateRoute.use('/Auth',AuthRouter );





export default PrivateRoute;
