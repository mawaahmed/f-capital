import type {
  CreateInvoiceInput,
  InvoiceResponse,
  InvoiceListResponse,
} from "@/types/invoice";
import baseApi from "./base-service";

export const createInvoiceService = async (
  payload: CreateInvoiceInput
): Promise<InvoiceResponse> => {
  return (await baseApi.post("/invoices", payload)).data;
};


export const getInvoiceByIdService = async (
  invoiceId: string
): Promise<InvoiceResponse> => {
  return (await baseApi.get(`/invoices/${invoiceId}`)).data;
};


export const getAllInvoicesService = async (): Promise<InvoiceListResponse> => {
  return (await baseApi.get("/invoices")).data;
};


export const deleteInvoiceService = async (
  invoiceId: string
): Promise<{ message: string }> => {
  return (await baseApi.delete(`/invoices/${invoiceId}`)).data;
};
