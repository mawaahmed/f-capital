import { fetchNotificationsByUser } from "@/services/notification-services";

import type { Notification } from "@/types/notifications";
import { useQuery } from "@tanstack/react-query";

// ➕ Créer une notification
// export const useCreateNotification = (
//   onSuccess?: (data: Notification) => void,
//   onError?: (err: unknown) => void
// ) => {
//   const queryClient = useQueryClient();

//   return useMutation<Notification, unknown, NotificationInput>({
//     mutationFn: (payload) => createNotification(payload),
//     onSuccess: (data) => {
//       if (data.clientId && typeof data.clientId === "object") {
//         queryClient.invalidateQueries({
//           queryKey: ["notifications", data.clientId?.name], // ou un autre identifiant unique
//         });
//       }
//       onSuccess?.(data);
//     },
//     onError,
//   });
// };

// 📥 Obtenir les notifications d’un utilisateur
export const useUserNotifications = (userEmail: string, enabled = true) => {
  return useQuery<Notification[]>({
    queryKey: ["notifications", userEmail],
    queryFn: () => fetchNotificationsByUser(),
    enabled: !!userEmail && enabled,
  });
};
