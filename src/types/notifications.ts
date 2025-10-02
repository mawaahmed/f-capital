import type { Order } from "./order";

export interface Notification {
  date: string;
  type: "INFO" | "WARNING" | "ERROR" | string;
  message: string;
  isRead: boolean;
  id: number;
  title: string;
  time: string;
  details: string;
  read: boolean;
  preview?: string;
  order: Order;
  company: {
    name: string;
    logo: string;
    phone: string;
    email: string;
    address: string;
    longitude: string;
    latitude: string;
    type: "Supplier" | "Client" | string;
    businessCategory: string;
    taxIdentificationNumber: string;
    contactPerson: string;
  };
  client: {
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
  };
}
export interface NotificationInput {
  date: string;
  type: "INFO" | "WARNING" | "ERROR" | string;
  message: string;
  isRead: boolean;
  companyId: {
    name: string;
    logo: string;
    phone: string;
    email: string;
    address: string;
    longitude: string;
    latitude: string;
    type: "Supplier" | "Client" | string;
    businessCategory: string;
    taxIdentificationNumber: string;
    contactPerson: string;
  };
  clientId?: {
    name?: string;
    logo?: string;
    phone?: string;
    email?: string;
    address?: string;
    longitude?: string;
    latitude?: string;
    contactPersonName?: string;
    contactPersonEmail?: string;
    contactPersonPhone?: string;
    categoryId?: number;
  };
}
