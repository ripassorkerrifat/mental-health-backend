import { VercelRequest, VercelResponse } from '@vercel/node';
import mongoose from 'mongoose';
import app from '../src/app';
import config from '../src/config/index';

let isConnected = false;

async function connectToDatabase() {
  if (!isConnected) {
    try {
      await mongoose.connect(config.database_url as string);
      isConnected = true;
      console.log('DB is connected successfully');
    } catch (err) {
      console.log('Database connection error:', err);
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
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
}
