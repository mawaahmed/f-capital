import type { Order } from "@/types/order";
import baseApi from "./base-service";
import type {
  Client,
  CreateClientInput,
  UpdateClientInput,
} from "@/types/client";

export const fetchClients = async (): Promise<Client[]> => {
  return (await baseApi.get("/clients")).data;
};

export const fetchClientOrders = async (id: string): Promise<Order[]> => {
  return (await baseApi.get(`/clients/${id}/orders`)).data;
};

export const countClients = async (): Promise<{ count: number }> => {
  return (await baseApi.get("/clients/count")).data;
};

export const createClient = async (
  data: CreateClientInput
): Promise<Client> => {
  const response = await baseApi.post(`/clients`, data);
  return response.data;
};

// Envoyer une invitation
export const sendInvitation = async (clientId: number): Promise<void> => {
  await baseApi.post(`/clients/${clientId}/send-invitation`);
};

// Modifier un client
export const updateClient = async (
  id: string,
  payload: UpdateClientInput
): Promise<Client> => {
  const response = await baseApi.patch(`/clients/${id}`, payload);
  return response.data;
};

export const fetchClientById = async (id: string): Promise<Client> => {
  const response = await baseApi.get(`/clients/${id}`);
  return response.data;
};

export const fetchClientInvitationByToken = async (
  token: string
): Promise<Client> => {
  const response = await baseApi.get(`/clients/invitation/${token}`);
  return response.data;
};

export const deleteClient = async (id: string): Promise<void> => {
  await baseApi.delete(`/clients/${id}`);
};
