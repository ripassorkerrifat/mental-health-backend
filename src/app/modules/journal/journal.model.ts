import { Schema, model } from 'mongoose';
import { IJournal, JournalModel } from './journal.interface';

const journalSchema = new Schema<IJournal, JournalModel>(
   {
      userId: {
         type: String,
         required: true,
      },
      title: {
         type: String,
         required: true,
      },
      desc: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

export const Journal = model<IJournal, JournalModel>('Journal', journalSchema);
