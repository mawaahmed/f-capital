export interface Treasury {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: "INCOME" | "EXPENSE"; 
  status?: "PENDING" | "COMPLETED" | "CANCELED";
  source?: string; 
}

export interface TreasuryInput {
  date: string;
  description: string;
  amount: number;
  type: "INCOME" | "EXPENSE";
    status?: "PENDING" | "COMPLETED" | "CANCELED";
  source?: string;
}
