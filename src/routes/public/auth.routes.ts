import express from 'express';
import AuthController from '../../controller/auth.controller';

const AuthRouter = express.Router();
// CRUD routes  
AuthRouter.post('/login', AuthController.Login); 

export default AuthRouter;