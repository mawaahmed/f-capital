export interface ClientCategory {
  id: string;
  name: string;
  description?: string;
  minimumOrderQuantity?: number;
  clients?: number;
  clientCount?: number;
  key?: string;
  icon?: string;
}

export interface CreateClientCategoryInput {
  name: string;
  description?: string;
  minimumOrderQuantity: number;
  companyId: string;
}

export interface UpdateClientCategoryInput {
  name: string;
  description?: string;
  minimumOrderQuantity?: number;
}
