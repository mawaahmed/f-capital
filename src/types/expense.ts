export interface Expense {
  id: string;
  date: string;
  category: string;
  description: string;
  amount: number;
  attachment?: string;
}
 
export interface CreateExpenseInput {
  title: string;
  category: string;
  amount: number;
  attachment?: string;
  paymentMethod: string;
  paymentDate: string;
  notes: string;
  file?: File;
}

export interface ExpenseUpdateInput {
  category?: string;
  description?: string;
  amount?: number;
  date?: string;
  attachment?: string;
}

