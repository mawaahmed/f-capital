import baseApi from "./base-service";
import type { CreateExpenseInput, Expense, ExpenseUpdateInput } from "@/types/expense";

// Ajouter une nouvelle dépense
export const createExpense = async (payload: CreateExpenseInput): Promise<Expense> => {
  return (await baseApi.post("/expenses", payload)).data;
};

// Obtenir la liste des dépensesc
export const fetchExpenses = async (): Promise<Expense[]> => {
  return (await baseApi.get("/expenses")).data;
};

// Obtenir une dépense spécifique par ID
export const fetchExpenseById = async (id: string): Promise<Expense> => {
  return (await baseApi.get(`/expenses/${id}`)).data;
};

// Modifier une dépense
export const updateExpense = async (
  id: string,
  payload: ExpenseUpdateInput
): Promise<Expense> => {
  return (await baseApi.put(`/expenses/${id}`, payload)).data;
};

// Supprimer une dépense
export const deleteExpense = async (id: string): Promise<void> => {
  await baseApi.delete(`/expenses/${id}`);
};
