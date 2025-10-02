import {
  createRole,
  fetchRoles,
  fetchRoleById,
  updateRole,
  deleteRole,
  fetchPermissions,
  assignPermissionsToRole,
} from "@/services/role-permission-services";

import type {
  Role,
  RoleInput,
  RoleUpdateInput,
  Permission,
} from "@/types/role";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreateRole = (
  onSuccess?: (data: Role) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: RoleInput) => createRole(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useRoles = () => {
  return useQuery<Role[]>({
    queryKey: ["roles"],
    queryFn: fetchRoles,
  });
};

export const useRoleDetails = (id: string, enabled = true) => {
  return useQuery<Role>({
    queryKey: ["role", id],
    queryFn: () => fetchRoleById(id),
    enabled: !!id && enabled,
  });
};

export const useUpdateRole = (
  onSuccess?: (data: Role) => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: RoleUpdateInput }) =>
      updateRole(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useDeleteRole = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteRole(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
      onSuccess?.();
    },
    onError,
  });
};

export const usePermissions = () => {
  return useQuery<Permission[]>({
    queryKey: ["permissions"],
    queryFn: fetchPermissions,
  });
};

export const useAssignPermissionsToRole = (
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      roleId,
      permissionIds,
    }: {
      roleId: string;
      permissionIds: string[];
    }) => assignPermissionsToRole(roleId, permissionIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
      onSuccess?.();
    },
    onError,
  });
};
