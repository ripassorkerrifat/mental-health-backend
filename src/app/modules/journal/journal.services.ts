import { IJournal } from './journal.interface';
import { Journal } from './journal.model';

const createJournal = (paloasd: IJournal): Promise<IJournal | null> => {
   return Journal.create(paloasd);
};
const getAllJournal = (): Promise<IJournal[] | null> => {
   return Journal.find().sort({ createdAt: -1 });
};
const getSingleJournal = (id: string): Promise<IJournal | null> => {
   return Journal.findOne({ _id: id });
};
const getJournalByUser = (userId: string): Promise<IJournal[] | null> => {
   return Journal.find({ userId }).sort({ createdAt: -1 });
};

export const JournalServices = {
   createJournal,
   getAllJournal,
   getSingleJournal,
   getJournalByUser,
};
