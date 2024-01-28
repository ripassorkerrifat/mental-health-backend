import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: IUser): Promise<IUser | null> => {
   const result = await User.create(payload);
   return result;
};
const getSingleUser = async (id: string): Promise<IUser | null> => {
   return await User.findById(id);
};
const getAllUsers = async (): Promise<IUser[] | null> => {
   return await User.find();
};

export const UserServices = {
   createUser,
   getSingleUser,
   getAllUsers,
};
