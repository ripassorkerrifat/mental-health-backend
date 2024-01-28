import { Request, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { Imood } from './mood.interface';
import { MoodServices } from './mood.services';

const createMood = catchAsync(async (req: Request, res: Response) => {
   const result = await MoodServices.createMood(req.body);

   sendResponse<Imood>(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Mood create successfully..!!',
      data: result,
   });
});
const getAllMoodByUser = catchAsync(async (req: Request, res: Response) => {
   const result = await MoodServices.getAllMoodByUser(req.params.id);

   sendResponse<Imood[]>(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Moods by user successfully..!!',
      data: result,
   });
});
const getLastOne = catchAsync(async (req: Request, res: Response) => {
   const result = await MoodServices.getLastOne(req.params.id);

   sendResponse<Imood>(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Last Mood by user successfully..!!',
      data: result,
   });
});

export const MoodControler = {
   createMood,
   getAllMoodByUser,
   getLastOne,
};
