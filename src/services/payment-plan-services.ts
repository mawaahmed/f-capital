import baseApi from "./base-service";
import type {
  PaymentPlan,
  PaymentPlanInput,
  PaymentPlanUpdateInput,
} from "@/types/payment-plan";

// Créer un plan de paiement
export const createPaymentPlan = async (
  payload: PaymentPlanInput
): Promise<PaymentPlan> => {
  return (await baseApi.post("/payment-plans", payload)).data;
};

// Liste des plans de paiement
export const fetchPaymentPlans = async (): Promise<PaymentPlan[]> => {
  return (await baseApi.get("/payment-plans")).data;
};

// Plan de paiement par ID
export const fetchPaymentPlanById = async (
  id: string
): Promise<PaymentPlan> => {
  return (await baseApi.get(`/payment-plans/${id}`)).data;
};

// Mise à jour d'un plan de paiement
export const updatePaymentPlan = async (
  id: string,
  payload: PaymentPlanUpdateInput
): Promise<PaymentPlan> => {
  return (await baseApi.put(`/payment-plans/${id}`, payload)).data;
};

// Suppression d’un plan de paiement
export const deletePaymentPlan = async (id: string): Promise<void> => {
  await baseApi.delete(`/payment-plans/${id}`);
};
