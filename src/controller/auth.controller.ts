import { Request, Response } from 'express';
import AuthService from '../services/auth.services';

class AuthController {
    public async Login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;  

            
            if (!email || !password) {
                
                res.status(400).json({ message: 'Username and password are required' });
                return; 
            }
    
            const loginUser = await AuthService.login(email, password);
    
            res.status(200).json({
                message: 'Login successful',
                token: loginUser.token,
                user: loginUser.user,
            });
        } catch (error: any) {
           if (error.message === 'Invalid email or password' || error.message === 'Invalid username or password') {
        res.status(401).json({ message: 'Invalid email or password' });
        return;
      }
      if (error.message === 'User is unactive, please contact admin') {
  res.status(403).json({ message: 'User is unactive, please contact admin' });
  return;
}

      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
    }
   

  
}

export default new AuthController();