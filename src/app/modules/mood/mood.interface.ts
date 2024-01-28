import { Document, Model } from 'mongoose';

export type Imood = {
   userId: string;
   mood: string;
} & Document;

export type MoodModel = Model<Imood>;
