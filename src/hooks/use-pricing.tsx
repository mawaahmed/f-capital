import {
  createPricing,
  fetchPricings,
  fetchPricingById,
  updatePricing,
  deletePricing,
} from "@/services/pricing-services";

import type {
  Pricing,
  PricingInput,
  PricingUpdateInput,
} from "@/types/pricing";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreatePricing = (
  onSuccess?: (data: Pricing) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: PricingInput) => createPricing(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["pricings"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useGetPricings = () => {
  return useQuery<Pricing[]>({
    queryKey: ["pricings"],
    queryFn: fetchPricings,
  });
};

export const usePricingDetails = (id: string, enabled = true) => {
  return useQuery<Pricing>({
    queryKey: ["pricing", id],
    queryFn: () => fetchPricingById(id),
    enabled: !!id && enabled,
  });
};

export const useUpdatePricing = (
  onSuccess?: (data: Pricing) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: PricingUpdateInput;
    }) => updatePricing(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["pricings"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useDeletePricing = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deletePricing(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pricings"] });
      onSuccess?.();
    },
    onError,
  });
};
