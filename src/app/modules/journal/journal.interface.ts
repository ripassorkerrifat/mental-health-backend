import { Document, Model } from 'mongoose';

export type IJournal = {
   userId: string;
   title: string;
   desc: string;
} & Document;

export type JournalModel = Model<IJournal>;
