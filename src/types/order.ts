import type { OrderStatus } from "./common";

export interface Order {
  id: number;
  date: string;
  expectedDeliveryDate: string;
  deliveryDate: string;
  totalAmount: number;
  status: string;
  supplierId: number;
  supplier: {
    address: string;
    contactPerson: string;
    email: string;
    name: string;
    phone: string;
    taxIdentificationNumber: string;
    vatPercentage: number;
    type: string;
  };
  quantity?: number;
  client: {
    id?: number;
    name: string;
    phone: string;
    email: string;
    address: string;
    date?: string;
  };
  orderItems: OrderItem[];
  paymentPlan: {
    id?: number;
    name: string;
    description: string;
  };
  lastUpdated: string;
  createdAt: string;
}
export interface OrderItem {
  quantity: number;
  unitPrice: number;
  subTotal: number;
  product: {
    id: string;
    name: string;
    description: string;
    code: string;
    imageUrls: string[];
    unit: string;
  };
}

export interface OrderItemInput {
  quantity: number;
  unitPrice: number;
  subTotal: number;
  productId: number;
  orderId?: number;
}

export interface OrderInput {
  date: string;
  expectedDeliveryDate: string;
  totalAmount: number;
  status: OrderStatus;
  supplierId: number;
  clientId: number;
  orderitems: OrderItemInput[];
  paymentPlanId: number;
  orderId: number; // Ajout de la propriété orderId
}

export interface OrderUpdateInput {
  date: string;
  expectedDeliveryDate: string;
  deliveryDate?: string;
  totalAmount: number;
  status: OrderStatus;
  orderItems: OrderItemInput[];
  paymentPlanId: number;
}