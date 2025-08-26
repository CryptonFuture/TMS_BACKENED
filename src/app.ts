
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import AppRoutes from './routes/app.routes';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: '*' })); // Allow all origins
app.use(bodyParser.json()); 
app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

// Register routes
app.use('', AppRoutes);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
                        
                        
                    