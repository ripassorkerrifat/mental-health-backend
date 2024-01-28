import { Schema, model } from 'mongoose';
import { Imood, MoodModel } from './mood.interface';

const moodSchemas = new Schema<Imood, MoodModel>(
   {
      userId: {
         type: String,
         required: true,
      },
      mood: {
         type: String,
         required: true,
      },
   },
   {
      timestamps: true,
   }
);

export const Mood = model<Imood, MoodModel>('Mood', moodSchemas);
