import baseApi from "./base-service";
import type {
  ClientCategory,
  CreateClientCategoryInput,
  UpdateClientCategoryInput,
} from "@/types/client-category";

// Liste toutes les catégories
export const fetchClientCategories = async (): Promise<ClientCategory[]> => {
  return (await baseApi.get("/client-categories")).data;
};

// Ajouter une catégorie
export const addClientCategory = async (
  payload: CreateClientCategoryInput
): Promise<ClientCategory> => {
  return (await baseApi.post("/client-categories", payload)).data;
};

// Modifier une catégorie
export const updateClientCategory = async (
  id: string,
  payload: UpdateClientCategoryInput
): Promise<ClientCategory> => {
  return (await baseApi.put(`/client-categories/${id}`, payload)).data;
};

// Supprimer une catégorie
export const deleteClientCategory = async (id: string): Promise<void> => {
  await baseApi.delete(`/client-categories/${id}`);
};
