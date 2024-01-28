import { Imood } from './mood.interface';
import { Mood } from './mood.model';

const createMood = async (payload: Imood) => {
   return await Mood.create(payload);
};
const getAllMoodByUser = async (userId: string): Promise<Imood[] | null> => {
   return await Mood.find({ userId });
};
const getLastOne = async (userId: string): Promise<Imood | null> => {
   return await Mood.findOne({ userId }).sort({ createdAt: -1 });
};

export const MoodServices = {
   createMood,
   getAllMoodByUser,
   getLastOne,
};
