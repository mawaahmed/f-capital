import {
  createPayment,
  fetchPayments,
  fetchPaymentById,
  updatePayment,
  deletePayment,
} from "@/services/payment-services";

import type {
  Payment,
  PaymentInput,
  PaymentUpdateInput,
} from "@/types/payment";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreatePayment = (
  onSuccess?: (data: Payment) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: PaymentInput) => createPayment(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const usePayments = () => {
  return useQuery<Payment[]>({
    queryKey: ["payments"],
    queryFn: fetchPayments,
  });
};

export const usePaymentDetails = (
  id: string,
  enabled = true
) => {
  return useQuery<Payment>({
    queryKey: ["payment", id],
    queryFn: () => fetchPaymentById(id),
    enabled: !!id && enabled,
  });
};

export const useUpdatePayment = (
  onSuccess?: (data: Payment) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: PaymentUpdateInput }) =>
      updatePayment(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useDeletePayment = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deletePayment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      onSuccess?.();
    },
    onError,
  });
};
