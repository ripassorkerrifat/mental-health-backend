/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../../config';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser, UserModel>(
   {
      fullName: {
         type: String,
         required: true,
      },
      role: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         unique: true,
         required: true,
      },
      password: {
         type: String,
         required: true,
         select: 0,
      },
      dateOfBirth: {
         type: String,
         required: true,
      },
      parmanentAddress: {
         type: String,
         required: true,
      },
      educationalQualification: {
         type: String,
         required: true,
      },
      nidOrBirthNumber: {
         type: String,
         unique: true,
         required: true,
      },
      profileImage: {
         type: String,
      },
   },
   {
      timestamps: true,
      toJSON: {
         virtuals: true,
      },
   }
);

userSchema.pre('save', async function (next) {
   let user = this;
   user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds)
   );
   next();
});

export const User = model<IUser, UserModel>('User', userSchema);
