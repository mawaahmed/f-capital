import baseApi from "./base-service";
import type { PricingInput, Pricing, PricingUpdateInput } from "@/types/pricing";

// Ajouter une nouvelle tarification
export const createPricing = async (payload: PricingInput): Promise<Pricing> => {
  return (await baseApi.post("/pricings", payload)).data;
};

// Obtenir la liste des tarifications
export const fetchPricings = async (): Promise<Pricing[]> => {
  return (await baseApi.get("/pricings")).data;
};

// Obtenir une tarification spécifique par ID
export const fetchPricingById = async (id: string): Promise<Pricing> => {
  return (await baseApi.get(`/pricings/${id}`)).data;
};

// Modifier une tarification
export const updatePricing = async (
  id: string,
  payload: PricingUpdateInput
): Promise<Pricing> => {
  return (await baseApi.put(`/pricings/${id}`, payload)).data;
};

// Supprimer une tarification
export const deletePricing = async (id: string): Promise<void> => {
  await baseApi.delete(`/pricings/${id}`);
};

// Filtrer les tarifications par type (par exemple : "standard", "premium", etc.)
export const filterPricingsByType = async (type: string): Promise<Pricing[]> => {
  return (await baseApi.get(`/pricings/type/${type}`)).data;
};
