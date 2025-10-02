// src/types/client.ts

import type { ClientCategory } from "./client-category";

export interface Client {
  id: string;
  name: string;
  logo?: string;
  phone: string;
  email: string;
  address: string;
  longitude: string;
  latitude: string;
  contactPersonName: string;
  contactPersonPhone: string;
  contactPersonEmail: string;
  status: "active" | "inactive";
  isActive?: boolean;
  category: ClientCategory;
  createdAt: string;
  lastUpdatedAt: string;
  categoryId: string;
  registrationNumber: string;
  companyName: string;
}

export interface CreateClientInput {
  name: string;
  logo: string;
  phone: string;
  email: string;
  address: string;
  longitude: string;
  latitude: string;
  contactPersonName: string;
  contactPersonEmail: string;
  contactPersonPhone: string;
  categoryId: number;
  companyId: string;
  
}
export interface UpdateClientInput {
  id?: string;
  name?: string;
  contactPersonName?: string;
  registrationNumber?: string;
  email?: string;
  phone?: string;
  address?: string;
  longitude?: string;
  latitude?: string;
  categoryId?: string;
  logo?: string;
  status?: "active" | "inactive";
  businessCategory?: string;
  contactPerson?: string;
  taxIdentificationNumber?: string;
  vatPercentage?: number;
  instructions?: string;
  paymentMethod?: string;
  quantity?: number;
  tva?: string;
}

export interface ClientListResponse {
  data: Client[];
  items: string[];
  total: number;
  page: number;
  pageSize: number;
}
