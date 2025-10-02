import type { Order, OrderInput, OrderUpdateInput } from "@/types/order";
import baseApi from "./base-service";

// Create
export const createOrderService = async (
  payload: OrderInput
): Promise<Order> => {
  return (await baseApi.post("/orders", payload)).data;
};

// Update
export const updateOrderService = async (
  orderId: string,
  payload: OrderUpdateInput
): Promise<Order> => {
  return (await baseApi.patch(`/orders/${orderId}`, payload)).data;
};

//afficher la liste des orders
export const fetchOrders = async (): Promise<Order[]> => {
  return (await baseApi.get("/orders")).data;
};

//taille de la liste des orders
export const countOrders = async (): Promise<{ count: number }> => {
  return (await baseApi.get("/orders/count")).data;
};

//afficher les détails d'un order
export const fetchOrderById = async (id: string): Promise<Order> => {
  return (await baseApi.get(`/orders/${id}`)).data;
};

// Delete
export const deleteOrderService = async (id: number): Promise<void> => {
  await baseApi.delete(`/orders/${id}`);
};

// filter orders by status
export const filterOrdersByStatusService = async (
  status: string
): Promise<Order[]> => {
  return (await baseApi.get(`/orders/status/${status}`)).data;
};

// filter orders by amount range
export const filterOrdersByAmountRangeService = async (
  minAmount: number,
  maxAmount: number
): Promise<Order[]> => {
  return (
    await baseApi.get(`/orders/amount-range`, {
      params: { min: minAmount, max: maxAmount },
    })
  ).data;
};

// search orders by customer name
export const searchOrdersByCustomerNameService = async (
  customerName: string
): Promise<Order[]> => {
  return (
    await baseApi.get(`/orders/search`, {
      params: { name: customerName },
    })
  ).data;
};
