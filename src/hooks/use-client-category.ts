import {
  fetchClientCategories,
  addClientCategory,
  updateClientCategory,
  deleteClientCategory,
} from "@/services/client-category-services";

import type {
  ClientCategory,
  CreateClientCategoryInput,
  UpdateClientCategoryInput,
} from "@/types/client-category";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


export const useClientCategories = () => {
  return useQuery<ClientCategory[]>({
    queryKey: ["client-categories"],
    queryFn: fetchClientCategories, 
  });
};


export const useAddClientCategory = (
  onSuccess?: (data: ClientCategory) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateClientCategoryInput) =>
      addClientCategory(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["client-categories"] });
      onSuccess?.(data);
    },
    onError,
  });
};


export const useUpdateClientCategory = (
  onSuccess?: (data: ClientCategory) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateClientCategoryInput;
    }) => updateClientCategory(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["client-categories"] });
      onSuccess?.(data);
    },
    onError,
  });
};


export const useDeleteClientCategory = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteClientCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client-categories"] });
      onSuccess?.();
    },
    onError,
  });
};
