import {
  createInvoiceService,
  getInvoiceByIdService,
  getAllInvoicesService,
  deleteInvoiceService,
} from "@/services/invoice-services";

import type {
  CreateInvoiceInput,
  InvoiceResponse,
} from "@/types/invoice";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export const useCreateInvoice = (
  onSuccess?: (data: InvoiceResponse) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateInvoiceInput) =>
      createInvoiceService(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      onSuccess?.(data);
    },
    onError,
  });
};


export const useInvoices = () => {
  return useQuery<InvoiceResponse[]>({
    queryKey: ["invoices"],
    queryFn: async () => {
      const res = await getAllInvoicesService();
      return res.invoices;
    },
  });
};


export const useInvoiceDetails = (
  id: string,
  enabled = true
) => {
  return useQuery<InvoiceResponse>({
    queryKey: ["invoice", id],
    queryFn: () => getInvoiceByIdService(id),
    enabled: !!id && enabled,
  });
};

export const useDeleteInvoice = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteInvoiceService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      onSuccess?.();
    },
    onError,
  });
};
