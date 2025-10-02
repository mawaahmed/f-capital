import {
  createOrderService,
  deleteOrderService,
  fetchOrderById,
  fetchOrders,
  updateOrderService,
} from "@/services/orders-services";

import type { Order, OrderInput, OrderUpdateInput } from "@/types/order";

import {
  useMutation,
  useQuery,
  useQueryClient,
  type UseQueryOptions,
} from "@tanstack/react-query";

export const useCreateOrder = (
  onSuccess?: (data: Order) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: OrderInput) => createOrderService(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      onSuccess?.(data);
    },
    onError,
  });
};

// Afficher la liste des orders
export const useGetOrders = () => {
  return useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: () => fetchOrders(),
    refetchOnWindowFocus: true,
  });
};

export const useGetOrder = (
  id: string,
  options?: UseQueryOptions<Order, Error>
) => {
  return useQuery<Order, Error>({
    queryKey: ["order", id],
    queryFn: () => fetchOrderById(id),
    enabled: !!id,
    ...options,
  });
};

// Modifier un order
export const useUpdateOrder = (
  onSuccess?: (data: Order) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: OrderUpdateInput }) =>
      updateOrderService(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["orders", "order"] });
      queryClient.invalidateQueries({ queryKey: ["order", data.id] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useDeleteOrder = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteOrderService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      onSuccess?.();
    },
    onError,
  });
};
