// export const useCountProducts = (
//   p0: (response: { count: number }) => void,
//   p1: (error: any) => void
// ) => {
//   return useQuery<{ count: number }>({
//     queryKey: ["products", "counts"],
//     queryFn: () => countProducts(),
//     refetchOnWindowFocus: false,
//   });
// };

// export const useCountClients = (
//   p0: (response: { count: number }) => void,
//   p1: (error: any) => void
// ) => {
//   return useQuery<{ count: number }>({
//     queryKey: ["clients", "counts"],
//     queryFn: () => countClients(),
//     refetchOnWindowFocus: false,
//   });
// };

// export const useCountOrders = (
//   p0: (response: { count: number }) => void,
//   p1: (error: any) => void
// ) => {
//   return useQuery<{ count: number }>({
//     queryKey: ["orders", "counts"],
//     queryFn: () => countOrders(),
//     refetchOnWindowFocus: false,
//   });
// };

// export const useCountNotifications = (
//   p0: (response: { count: number }) => void,
//   p1: (error: any) => void
// ) => {
//   return useQuery<{ count: number }>({
//     queryKey: ["notifications", "counts"],
//     queryFn: () => countNotificationsByUser(),
//     refetchOnWindowFocus: false,
//   });
// };
