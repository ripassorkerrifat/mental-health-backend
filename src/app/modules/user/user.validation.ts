import { z } from 'zod';

const createUserZodSchema = z.object({
   body: z.object({
      fullName: z.string({
         required_error: 'Full name is required.',
      }),
      email: z
         .string({
            required_error: 'Email is required',
         })
         .email(),
      password: z.string({
         required_error: 'Password is required',
      }),
      dateOfBirth: z.string({
         required_error: 'Date of birth is required',
      }),

      educationalQualification: z.string({
         required_error: 'Educational Qualification is required',
      }),

      parmanentAddress: z.string({
         required_error: 'Permanent address is required',
      }),
      nidOrBirthNumber: z.string({
         required_error: 'NID or Birth number is required',
      }),
      contactNo: z.string({
         required_error: 'Contact number  is required',
      }),
      profileImage: z.string().optional(),
   }),
});

export const UserValidation = {
   createUserZodSchema,
};
