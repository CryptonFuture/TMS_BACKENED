
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './configs/swaggerConfig';
import AppRoutes from './routes/app.router';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: '*' })); // Allow all origins
app.use(bodyParser.json()); 

// Register routes
app.use('', AppRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
                        
                        
                    