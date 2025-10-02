import baseApi from "./base-service";
import type { Payment, PaymentInput, PaymentUpdateInput } from "@/types/payment";

// Créer un paiement
export const createPayment = async (payload: PaymentInput): Promise<Payment> => {
  return (await baseApi.post("/payments", payload)).data;
};

// Liste des paiements
export const fetchPayments = async (): Promise<Payment[]> => {
  return (await baseApi.get("/payments")).data;
};

// Paiement par ID
export const fetchPaymentById = async (id: string): Promise<Payment> => {
  return (await baseApi.get(`/payments/${id}`)).data;
};

// Mise à jour d'un paiement
export const updatePayment = async (
  id: string,
  payload: PaymentUpdateInput
): Promise<Payment> => {
  return (await baseApi.put(`/payments/${id}`, payload)).data;
};

// Suppression d’un paiement
export const deletePayment = async (id: string): Promise<void> => {
  await baseApi.delete(`/payments/${id}`);
};
