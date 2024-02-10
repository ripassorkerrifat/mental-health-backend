import { StatusCodes } from 'http-status-codes';
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import routes from './app/routes';
import cookieParser from 'cookie-parser';

const app: Application = express();

// app.use((req, res, next) => {
//    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//    res.setHeader('Access-Control-Allow-Methods', '*');
//    res.setHeader('Access-Control-Allow-Headers', '*');
//    res.setHeader('Access-Control-Allow-Credentials', 'true');
//    next();
// });

// cors
app.use(cors());
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
   res.send(`Server is running at 5000 port`);
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
