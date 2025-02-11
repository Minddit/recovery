export type CaseStatus = 'new' | 'analyzing' | 'recovering' | 'completed' | 'rejected';

export interface TimelineEvent {
  id: string;
  date: string;
  action: string;
  responsiblePerson: string;
  details?: string;
}

export interface RecoveryCase {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  status: CaseStatus;
  transactionHash: string;
  lostAmount: string;
  cryptoCurrency: string;
  description: string;
  timeline: TimelineEvent[];
  documents: string[];
  messages: {
    id: string;
    date: string;
    sender: string;
    content: string;
  }[];
  assignedTo?: string;
}
