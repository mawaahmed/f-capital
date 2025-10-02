export interface Role {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  permissions?: Permission[];
}

export interface RoleInput {
  name: string;
  description?: string;
}

export interface RoleUpdateInput {
  name?: string;
  description?: string;
}

export interface Permission {
  id: string;
  name: string;
  description?: string;
}
