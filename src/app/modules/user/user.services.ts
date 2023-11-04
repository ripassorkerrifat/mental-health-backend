import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: IUser): Promise<IUser | null> => {
   payload.role = 'student';
   const user = await User.create(payload);
   return user;
};
const getAllUsers = async (): Promise<IUser[] | null> => {
   const user = await User.find();
   return user;
};

export const UserServices = {
   createUser,
   getAllUsers,
};
