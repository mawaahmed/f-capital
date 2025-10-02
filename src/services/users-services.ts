import baseApi from "./base-service";
import type { User, CreateUserInput } from "@/types/users";

export interface UserEntity {
  id?: number;
  name: string;
  email: string;
}

// Créer un utilisateur
export const createUser = async (data: CreateUserInput): Promise<User> => {
  const response = await baseApi.post(`/users`, data);
  return response.data;
};

// Afficher (récupérer) tous les utilisateurs
export const fetchUsers = async (): Promise<User[]> => {
  return (await baseApi.get("/users")).data;
};
// update un utilisateur
export const updateUser = async (
  id: number,
  data: Partial<CreateUserInput>
): Promise<User> => {
  const response = await baseApi.patch(`/users/${id}`, data);
  return response.data;
};

// update un profil utilisateur
export const updateUserProfile = async (
  id: number,
  data: Partial<CreateUserInput>
): Promise<User> => {
  const response = await baseApi.patch(`/users/profiles/${id}`, data);
  return response.data;
};
