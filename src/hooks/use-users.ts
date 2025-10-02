import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchUsers,
  createUser,
  updateUser,
  updateUserProfile,
} from "@/services/users-services";
import type { CreateUserInput, User } from "@/types/users";

// Hook pour récupérer tous les utilisateurs
export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};

// Hook pour créer un utilisateur
export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserInput) => createUser(data),
    onSuccess: () => {
      // Refetch la liste des utilisateurs après création
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

// Hook pour mettre à jour un utilisateur
export const useUpdateUser = (
  onSuccess?: (data: User) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number;
      data: Partial<CreateUserInput>;
    }) => updateUser(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      onSuccess?.(data);
    },
    onError,
  });
};

// Hook pour mettre à jour le profil d'un utilisateur
export const useUpdateUserProfile = (
  onSuccess?: (data: User) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number;
      data: Partial<CreateUserInput>;
    }) => updateUserProfile(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
      onSuccess?.(data);
    },
    onError,
  });
};
