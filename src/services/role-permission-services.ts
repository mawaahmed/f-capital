import baseApi from "./base-service";
import type { Role, RoleInput, RoleUpdateInput, Permission } from "@/types/role";


export const createRole = async (payload: RoleInput): Promise<Role> => {
  return (await baseApi.post("/roles", payload)).data;
};


export const fetchRoles = async (): Promise<Role[]> => {
  return (await baseApi.get("/roles")).data;
};

// Rôle par ID
export const fetchRoleById = async (id: string): Promise<Role> => {
  return (await baseApi.get(`/roles/${id}`)).data;
};

// Modifier un rôle
export const updateRole = async (
  id: string,
  payload: RoleUpdateInput
): Promise<Role> => {
  return (await baseApi.put(`/roles/${id}`, payload)).data;
};

// Supprimer un rôle
export const deleteRole = async (id: string): Promise<void> => {
  await baseApi.delete(`/roles/${id}`);
};

// Récupérer toutes les permissions
export const fetchPermissions = async (): Promise<Permission[]> => {
  return (await baseApi.get("/permissions")).data;
};

// Affecter des permissions à un rôle
export const assignPermissionsToRole = async (
  roleId: string,
  permissionIds: string[]
): Promise<void> => {
  await baseApi.post(`/roles/${roleId}/permissions`, { permissions: permissionIds });
};
