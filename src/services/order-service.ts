import baseApi from "./base-service";
import type { OrderInput, Order } from "@/types/order";

export const createOrder = async (data: OrderInput): Promise<Order> => {
  const response = await baseApi.post("/orders", data);
  return response.data;
};

export const getOrders = async (): Promise<Order[]> => {
  const response = await baseApi.get("/orders");
  return response.data;
};
