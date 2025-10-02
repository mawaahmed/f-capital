import {
  createExpense,
  fetchExpenses,
  fetchExpenseById,
  updateExpense,
  deleteExpense,
} from "@/services/expense-service";

import type {
  Expense,
  CreateExpenseInput,
  ExpenseUpdateInput,
} from "@/types/expense";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export const useCreateExpense = (
  onSuccess?: (data: Expense) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateExpenseInput) => createExpense(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      onSuccess?.(data);
    },
    onError,
  });
}; 


export const useExpenses = () => {
  return useQuery<Expense[]>({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });
};


export const useExpenseDetails = (id: string, enabled = true) => {
  return useQuery<Expense>({
    queryKey: ["expense", id],
    queryFn: () => fetchExpenseById(id),
    enabled: !!id && enabled,
  });
};


export const useUpdateExpense = (
  onSuccess?: (data: Expense) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: ExpenseUpdateInput;
    }) => updateExpense(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      onSuccess?.(data);
    },
    onError,
  });
};


export const useDeleteExpense = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteExpense(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      onSuccess?.();
    },
    onError,
  });
};
