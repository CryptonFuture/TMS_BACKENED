import express from 'express';  
import PublicRoute from './private/routes';
import PrivateRoute from './private/routes';

const AppRoutes = express.Router();

console.log('routing call')
// Public Routes
AppRoutes.use('/api', PublicRoute);
AppRoutes.use('/api',PrivateRoute)



export default AppRoutes;
