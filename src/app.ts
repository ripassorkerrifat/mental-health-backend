import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

// cors
app.use(
   cors({
      origin: [
         'http://localhost:3001',
         'https://mental-health-ztr7.vercel.app',
      ],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization'],
   })
);
// cockie perser
app.use(cookieParser());

// body perser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes
app.use('/api/v1', routes);

// globalErrorHandler
app.use(globalErrorHandler);

app.get('/', (req, res) => {
   res.send(`Server is running at 4000 port`);
});

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
   res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Not Found',
      errorMessages: [
         {
            path: req.originalUrl,
            message: 'API Not Found',
         },
      ],
   });
   next();
});

export default app;
