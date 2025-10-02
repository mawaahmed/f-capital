import {
  createCompany,
  fetchCompanies,
  fetchCompanyById,
  updateCompany,
  deleteCompany,
} from "@/services/company-services";

import type {
  Company,
  CompanyInput,
  CompanyUpdateInput,
} from "@/types/company";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreateCompany = (
  onSuccess?: (data: Company) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CompanyInput) => createCompany(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useCompanies = () => {
  return useQuery<Company[]>({
    queryKey: ["companies"],
    queryFn: fetchCompanies,
  });
};

export const useCompanyDetails = (id: string, enabled = true) => {
  return useQuery<Company>({
    queryKey: ["company", id],
    queryFn: () => fetchCompanyById(id),
    enabled: !!id && enabled,
  });
};

export const useUpdateCompany = (
  onSuccess?: (data: Company) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: CompanyUpdateInput }) =>
      updateCompany(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useDeleteCompany = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteCompany(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
      onSuccess?.();
    },
    onError,
  });
};
