import baseApi from "./base-service";
import type { Notification, NotificationInput } from "@/types/notifications";

export const createNotification = async (
  payload: NotificationInput
): Promise<Notification> => {
  return (await baseApi.post("/notifications", payload)).data;
};

export const fetchNotificationsByUser = async (): Promise<Notification[]> => {
  return (await baseApi.get(`/notifications`)).data;
};

export const countNotificationsByUser = async (): Promise<{
  count: number;
}> => {
  return (await baseApi.get(`/notifications/count`)).data;
};

// Nouvelle fonction pour marquer une notification comme lue
export const markNotificationAsRead = async (
  notificationId: string
): Promise<void> => {
  await baseApi.put(`/notifications/${notificationId}/read`);
};
