import { VercelRequest, VercelResponse } from '@vercel/node';
import mongoose from 'mongoose';
import app from '../src/app';
import config from '../src/config/index';

let isConnected = false;

async function connectToDatabase() {
  if (!isConnected) {
    try {
      if (!config.database_url) {
        throw new Error('DATABASE_URL environment variable is not set');
      }
      
      console.log('Attempting to connect to database...');
      await mongoose.connect(config.database_url as string, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });
      isConnected = true;
      console.log('DB is connected successfully');
    } catch (err) {
      console.log('Database connection error:', err);
      isConnected = false;
      throw err;
    }
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Connect to database
    await connectToDatabase();
    
    // Handle the request using the Express app
    return app(req, res);
  } catch (error) {
    console.error('Handler error:', error);
    
    // Handle specific MongoDB connection errors
    if (error instanceof Error && error.message.includes('ENOTFOUND')) {
      return res.status(500).json({
        success: false,
        message: 'Database connection failed. Please check your MongoDB connection string.',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Database connection error'
      });
    }
    
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
}
