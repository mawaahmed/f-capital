import {
  fetchClients,
  fetchClientById,
  createClient,
  updateClient,
  deleteClient,
  sendInvitation,
  fetchClientInvitationByToken,
  fetchClientOrders,
} from "@/services/client-services";

import type {
  Client,
  CreateClientInput,
  UpdateClientInput,
} from "@/types/client";
import type { Order } from "@/types/order";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

export const useClients = () => {
  return useQuery<Client[]>({
    queryKey: ["clients"],
    queryFn: fetchClients,
    staleTime: 5000,
  });
};

export const useGetClientOrders = (id: string) => {
  return useQuery<Order[]>({
    queryKey: ["client", "orders", id],
    queryFn: () => fetchClientOrders(id),
    enabled: !!id,
    staleTime: 5000,
  });
};

export const useGetClient = (
  id: string,
  options?: UseQueryOptions<Client, Error>
) => {
  return useQuery<Client, Error>({
    queryKey: ["clients", id],
    queryFn: () => fetchClientById(id),
    enabled: !!id,
    ...options,
  });
};

export const useGetClientInvitation = (
  token: string,
  options?: UseQueryOptions<Client, Error>
) => {
  return useQuery<Client, Error>({
    queryKey: ["client-invitation", token],
    queryFn: () => fetchClientInvitationByToken(token),
    ...options,
  });
};

export const useCreateClient = (
  onSuccess?: (data: Client) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateClientInput) => createClient(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useSendInvitation = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  return useMutation({
    mutationFn: (clientId: number) => sendInvitation(clientId),
    onSuccess,
    onError,
  });
};

export const useUpdateClient = (
  onSuccess?: (data: Client) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateClientInput }) =>
      updateClient(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useDeleteClient = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteClient(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      onSuccess?.();
    },
    onError,
  });
};

// export const useSearchClients = (
//   query: string,
//   onSuccess?: (data: Client[]) => void,
//   onError?: (err: unknown) => void
// ) => {
//   return useQuery<Client[], Error>({
//     queryKey: ["clients", "search", query],
//     queryFn: () => searchClients(query),
//     enabled: !!query,
//     onSuccess,
//     onError,
//   } as UseQueryOptions<Client[], Error>);
// };
