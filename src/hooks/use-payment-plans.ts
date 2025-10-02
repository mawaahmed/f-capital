import {
  fetchPaymentPlans,
  fetchPaymentPlanById,
  updatePaymentPlan,
  deletePaymentPlan,
  createPaymentPlan,
} from "@/services/payment-plan-services";
import type {
  PaymentPlan,
  PaymentPlanInput,
  PaymentPlanUpdateInput,
} from "@/types/payment-plan";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreatePaymentPlan = (
  onSuccess?: (data: PaymentPlan) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: PaymentPlanInput) => createPaymentPlan(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["payment-plans"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useGetPaymentPlans = () => {
  return useQuery<PaymentPlan[]>({
    queryKey: ["payment-plans"],
    queryFn: fetchPaymentPlans,
  });
};

export const useGetPaymentPlan = (id: string, enabled = true) => {
  return useQuery<PaymentPlan>({
    queryKey: ["payment-plan", id],
    queryFn: () => fetchPaymentPlanById(id),
    enabled: !!id && enabled,
  });
};

export const useUpdatePaymentPlan = (
  onSuccess?: (data: PaymentPlan) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: PaymentPlanUpdateInput;
    }) => updatePaymentPlan(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["payment-plans"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useDeletePaymentPlan = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deletePaymentPlan(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["payment-plans"] });
      onSuccess?.();
    },
    onError,
  });
};
