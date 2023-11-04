import { Model } from 'mongoose';

export type IUser = {
   fullName: string;
   role: string;
   email: string;
   password: string;
   dateOfBirth: string;
   parmanentAddress: string;
   educationalQualification: string;
   contactNo: string;
   nidOrBirthNumber: string;
   profileImage: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
